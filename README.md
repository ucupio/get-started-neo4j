# get-started-neo4j

## History

- Leonhard Euler 1736, seven bridges in Königsberg, Prussia.
- Can we take a walk through the city that would cross each of the seven bridges only once?

## Graph Elements

- Nodes (also known as vertices): are the graph elements that represent the things in our data entity example: person, city, etc
- Relationships (also known as edges) tipically verb is a connection between two nodes.each relationship must have a direction in the graph.Each relationship in a neo4j graph must have a type.

## Structure

- directed vs undirected => love relationship is example directed each relation have each stength
- weight vs unweight => variety of measurement
- ![image](https://graphacademy.neo4j.com/courses/neo4j-fundamentals/1-graph-thinking/3-graph-structure/images/roads.jpg)

## Property

- Properties are key, value pairs and can be added or removed from a node as necessary
- Properties do not need to exist for each node with a particular label. If a property does not exist for a node, it is treated as a null value.
- ![property](https://graphacademy.neo4j.com/courses/neo4j-fundamentals/2-property-graphs/1-property-graph/images/node-properties.jpg)
- As with nodes, relationships can also have properties
- ![relation-property](https://graphacademy.neo4j.com/courses/neo4j-fundamentals/2-property-graphs/1-property-graph/images/relationship-properties.jpg)
- Native graph database, Index-free adjacency (IFA)
  ```
  WHERE ID = (SELECT PARENT_ID
    FROM GROUPS
    WHERE ID = 3))
  ```
- The benefits of IFA compared to relational DBMS access are:
  Fewer index lookups.
  No table scans.
  Reduced duplication of data.

## Reading Data

- Cypher is a query language designed for graphs
- Nodes are represented by parentheses ().
- We use a colon to signify the label(s), for example (:Person).
- Relationships between nodes are written with two dashes, for example (:Person)--(:Movie).
- The direction of a relationship is indicated using a greater than or less than symbol < or > , for example (:Person)-→(:Movie).
- The type of the relationship is written using the square brackets between the two dashes: [ and ], for example [:ACTED_IN]
- Properties drawn in a speech bubble are specified in a JSON like syntax.
- Properties in Neo4j are key/value pairs, for example {name: 'Tom Hanks'}.
  ```
  (m:Movie {title: 'Cloud Atlas'})<-[:ACTED_IN]-(p:Person)
  ```
- The two node types in this pattern are Movie and Person. The Person nodes have a directed ACTED_IN relationship to Movie nodes. The specific Movie node in this pattern is filtered by the title property with a value of Cloud Atlas. So this pattern represents all people in the graph who acted in the movie, Cloud Atlas.
- ```
  MATCH (p:Person)
  RETURN p
  ```
  This query returns all nodes in the graph with the Person label. You can view the results returned using the graph view or the table view. When you select the table view, you can also see the properties for the nodes returned.
- ```
  MATCH (p:Person {name: 'Tom Hanks'})
  RETURN p
  ```
  This query returns a single node that represents Tom Hanks. In the graph view of Neo4j Browser, the node is visualized as a bubble. You can also view the results returned in table view where you can view the properties of the node.
- ```
  MATCH (p:Person {name: 'Tom Hanks'})
  RETURN  p.born
  ```
  This query returns the value of the born property of the Tom Hanks node.
- ```
  MATCH (p:Person)-[:ACTED_IN]->(m:Movie)
  WHERE 2000 <= m.released <= 2003
  RETURN p.name, m.title, m.released
  ```
  This query returns filtering realease year.
- In Cypher, labels, property keys, and variables are case-sensitive. Cypher keywords are not case-sensitive.

- Neo4j best practices include:
  - Name labels using CamelCase.
  - Name property keys and variables using camelCase.
  - User UPPERCASE for Cypher keywords.

## Writing data

- MERGE
  ```
  MERGE (p:Person {name: 'Katie Holmes'})
  MERGE (m:Movie {title: 'The Dark Knight'})
  RETURN p, m
  ```
- CREATE,
  Cypher has a CREATE clause you can use for creating nodes. The benefit of using CREATE is that it does not look up the primary key before adding the node. You can use CREATE if you are sure your data is clean and you want greater speed during import. We use MERGE to eliminates duplication of nodes.
