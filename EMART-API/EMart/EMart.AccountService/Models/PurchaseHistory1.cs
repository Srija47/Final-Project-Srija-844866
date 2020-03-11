using System;
using System.Collections.Generic;

namespace EMart.AccountService.Models
{
    public partial class PurchaseHistory1
    {
        public int Id { get; set; }
        public int? Bid { get; set; }
        public int? Sid { get; set; }
        public int TransactionId { get; set; }
        public int? ItemId { get; set; }
        public int NoOfItems { get; set; }
        public DateTime Datetime { get; set; }
        public string Remarks { get; set; }

        public virtual Buyer B { get; set; }
        public virtual Items Item { get; set; }
        public virtual Seller S { get; set; }
    }
}
