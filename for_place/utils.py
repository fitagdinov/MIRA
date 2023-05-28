import osmnx as ox
import networkx as nx
import osmnx as ox
import time
s=time.time()
place = 'Moscow, Russia'
G = ox.graph_from_place(place, network_type='walk')
ox.plot_graph(G)
origin_point=(55.783602, 37.567915)
destination_point=(55.792230, 37.572309)
orig_node = ox.distance.nearest_nodes(G, origin_point[1], origin_point[0])
destination_node = ox.distance.nearest_nodes(G,
    destination_point[1], destination_point[0])
print(time.time()-s)
# find shortest path based on travel time
route = nx.shortest_path(G, orig_node, destination_node, weight='travel_time')

edge_travel_time = ox.utils_graph.get_route_edge_attributes(
    G, route, 'travel_time')

route_travel_time = sum(edge_travel_time)
print("Travel time in minutes:", route_travel_time/60)

fig, ax = ox.plot_graph_route(G, route, node_size=0, figsize=(40,40),tiles='openstreetmap')
print(time.time()-s)