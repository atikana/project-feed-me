using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FeedMe.Config
{
    public class MongoDBConfig
    {
        // Credits: https://medium.com/@kristaps.strals/docker-mongodb-net-core-a-good-time-e21f1acb4b7b

        public string Database { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
        public string ConnectionString
        {
            get
            {
                if (string.IsNullOrEmpty(User) || string.IsNullOrEmpty(Password))
                    return $@"mongodb://{Host}:{Port}"; return $@"mongodb://{User}:{Password}@{Host}:{Port}";
            }
        }
    }
}
