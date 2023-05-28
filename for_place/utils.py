import osmnx as ox
import networkx as nx
import osmnx as ox
import time
s=time.time()
place = 'Moscow, Russia'
G = ox.graph_from_place(place, network_type='walk')
ox.plot_graph(G)
# origin_point=(55.783602, 37.567915)
# destination_point=(55.792230, 37.572309)
# orig_node = ox.distance.nearest_nodes(G, origin_point[1], origin_point[0])
# destination_node = ox.distance.nearest_nodes(G,
#     destination_point[1], destination_point[0])
print(time.time()-s)
# find shortest path based on travel time
route = nx.shortest_path(G, orig_node, destination_node, weight='travel_time')

edge_travel_time = ox.utils_graph.get_route_edge_attributes(
    G, route, 'travel_time')

route_travel_time = sum(edge_travel_time)
print("Travel time in minutes:", route_travel_time/60)

fig, ax = ox.plot_graph_route(G, route, node_size=0, figsize=(40,40),tiles='openstreetmap')
print(time.time()-s)
# station_st_node_id = ox.distance.nearest_nodes(G, [151.014898], [-34.06714])[0]
# ox.config(log_console=True, use_cache=True)
#
# # define the start and end locations in latlng
# start_latlng = (37.78497,-122.43327)
# end_latlng = (37.78071,-122.41445)
#
# # location where you want to find your route

#
# # find shortest route based on the mode of travel
# mode = 'walk' # 'drive', 'bike', 'walk'
#
# # find shortest path based on distance or time
# optimizer = 'time' # 'length','time'
#
# # create graph from OSM within the boundaries of some
# # geocodable place(s)
# graph = ox.graph_from_place(place, network_type = mode)
#
# # find the nearest node to the start location
# orig_node = ox.get_nearest_node(graph, start_latlng)
#
# # find the nearest node to the end location
# dest_node = ox.get_nearest_node(graph, end_latlng)
#
# # find the shortest path
# shortest_route = nx.shortest_path(graph, orig_node,dest_node,
#                                   weight=optimizer)