using System;
using System.Collections.Generic;

namespace EMart.SellerService.Models
{
    public partial class Discounts
    {
        public int? Id { get; set; }
        public string DiscountCode { get; set; }
        public decimal? Percentage { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public string Description { get; set; }
    }
}
