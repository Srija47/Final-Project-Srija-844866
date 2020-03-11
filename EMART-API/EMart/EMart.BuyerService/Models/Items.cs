using System;
using System.Collections.Generic;

namespace EMart.BuyerService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
            PurchaseHistory = new HashSet<PurchaseHistory>();
            PurchaseHistory1 = new HashSet<PurchaseHistory1>();
        }

        public int Id { get; set; }
        public int? Categoryid { get; set; }
        public int? Subcategoryid { get; set; }
        public string Price { get; set; }
        public string Itemname { get; set; }
        public string Description { get; set; }
        public int? Stocknumber { get; set; }
        public string Remarks { get; set; }
        public int? Sid { get; set; }
        public string Imagename { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller S { get; set; }
        public virtual SubCategory Subcategory { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual ICollection<PurchaseHistory1> PurchaseHistory1 { get; set; }
    }
}
