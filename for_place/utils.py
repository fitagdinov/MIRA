import osmnx as ox
import networkx as nx
import osmnx as ox
import time
s=time.time()
place = 'Moscow, Russia'
G = ox.graph_from_place(place, network_type='walk')
# G=ox.graph.graph_from_address('https://download.geofabrik.de/russia.html')
# ox.plot_graph(G)
print(time.time()-s)
origin_point=(55.783602, 37.567915)
destination_point=(55.792230, 37.572309)
orig_node = ox.distance.nearest_nodes(G, origin_point[1], origin_point[0])
destination_node = ox.distance.nearest_nodes(G,
    destination_point[1], destination_point[0])
print(time.time()-s)


orig, dest = list(G)[0], list(G)[-1]
route = nx.shortest_path(G, orig, dest, weight='travel_time')

# OPTION 1: see the travel time for the whole route
travel_time = nx.shortest_path_length(G, orig, dest, weight='travel_time')
print(travel_time)
print(round(travel_time))
print(time.time()-s)
# find shortest path based on travel time
route = nx.shortest_path(G, orig_node, destination_node, weight='travel_time')

edge_travel_time = ox.utils_graph.get_route_edge_attributes(
    G, route)
print(edge_travel_time)
route_travel_time = sum([i['length'] for i in edge_travel_time])
print("Travel time in minutes:", route_travel_time)

fig, ax = ox.plot_graph_route(G, route, node_size=0, figsize=(40,40))
print(time.time()-s)