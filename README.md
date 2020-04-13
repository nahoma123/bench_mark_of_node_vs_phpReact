# bench mark of node vs PhpReact
This is a comparison between phpreact and node

This test includes node with clusters, node with out clusters(slower) and php with phpLibraries

node —-
Running 30s test @ http://127.0.0.1:1337
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    21.13ms    5.98ms 263.73ms   97.56%
    Req/Sec     1.57k   218.27     4.29k    92.26%
  554352 requests in 30.06s, 106.79MB read
Requests/sec:  18442.84
Transfer/sec:      3.55MB

phpReact
nahom@nahom-CN15-A5:~/wrk$ ./wrk -t12 -c400 -d30s http://127.0.0.1:8001
Running 30s test @ http://127.0.0.1:8001
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     9.90ms   53.55ms   1.67s    98.60%
    Req/Sec   583.95    405.54     2.47k    77.04%
  192535 requests in 30.05s, 37.64MB read
  Socket errors: connect 0, read 7, write 0, timeout 16
Requests/sec:   6407.32
Transfer/sec:      1.25MB

Btw this is even without using clusters and stuff in node ..

and this is node with cluster 

nahom@nahom-CN15-A5:~/wrk$ ./wrk -t12 -c400 -d30s http://127.0.0.1:1337
Running 30s test @ http://127.0.0.1:1337
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.37ms    8.30ms 275.73ms   93.58%
    Req/Sec     5.05k     0.91k   16.92k    72.33%
  1806645 requests in 30.10s, 348.04MB read
Requests/sec:  60028.63
Transfer/sec:     11.56MB


You can download the code and check your self under the folders 
node and phpReact
