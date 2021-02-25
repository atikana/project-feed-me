using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Config
{
    public class ServerConfig
    {
        // Credits: https://medium.com/@kristaps.strals/docker-mongodb-net-core-a-good-time-e21f1acb4b7b

        public MongoDBConfig MongoDB { get; set; } = new MongoDBConfig();
    }
}
