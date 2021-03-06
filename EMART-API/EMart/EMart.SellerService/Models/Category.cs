﻿using System;
using System.Collections.Generic;

namespace EMart.SellerService.Models
{
    public partial class Category
    {
        public Category()
        {
            Cart = new HashSet<Cart>();
            Items = new HashSet<Items>();
            SubCategory = new HashSet<SubCategory>();
        }

        public int Categoryid { get; set; }
        public string Categoryname { get; set; }
        public string Categorybrief { get; set; }

        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<Items> Items { get; set; }
        public virtual ICollection<SubCategory> SubCategory { get; set; }
    }
}
