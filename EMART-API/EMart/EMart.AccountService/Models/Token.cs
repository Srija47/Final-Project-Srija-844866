using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService.Models
{
    public class Token
    {
        public string uname { get; set; }
        public int buyerid {get;set;}
        public int sellerid { get; set; }
        public string token { get; set; }
        public string message { get; set; }

    }
}
