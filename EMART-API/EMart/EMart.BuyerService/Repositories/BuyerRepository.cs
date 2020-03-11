using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace EMart.BuyerService.Repositories
{
    public class BuyerRepository:IBuyerRepository
    {
        private readonly EMartDBContext _context;
        public BuyerRepository(EMartDBContext context)
        {
            _context = context;
        }

        public void BuyItem(PurchaseHistory purchase)
        {
            _context.Add(purchase);
            _context.SaveChanges();
        }

        public void EditProfileBuyer(Buyer buyer)
        {
            _context.Update(buyer);
            _context.SaveChanges();
        }

        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }

        public Buyer GetProfileBuyer(int bid)
        {
            return _context.Buyer.Find(bid);
        }

        public List<PurchaseHistory> PurchaseHistorys(int bid)
        {
            List<PurchaseHistory> item = _context.PurchaseHistory.Where(i => i.Bid == bid).ToList();
            return item;
        }

        public List<Items> SearchItems(string itemname)
        {
            return _context.Items.Where(i => i.Itemname == itemname).ToList();
        }
        public List<Items> SearchItemByCategory(int categoryid)
        {
            return _context.Items.Where(i => i.Categoryid == categoryid).ToList();
        }
        public List<Items> SearchItemBySubCategory(int subcategoryid)
        {
            return _context.Items.Where(i => i.Subcategoryid == subcategoryid).ToList();
        }

        public List<SubCategory> SubCategories(int categoryid)
        {
            return _context.SubCategory.ToList();
        }
       
        public List<Items> GetAllItems()
        {
            return _context.Items.ToList();
        }
        public void AddtoCart(Cart cart)
        {
            _context.Add(cart);
            _context.SaveChanges();
        }
        public List<Cart> GetCartItems()
        {
            return _context.Cart.ToList();
        }
        public Cart GetCartItemById(int id)
        {
            return _context.Cart.Find(id);
        }
        public void DeleteCartItem(int id)
        {
            Cart cart = _context.Cart.Find(id);
            _context.Cart.Remove(cart);
            _context.SaveChanges();
        }
        public List<PurchaseHistory> GetPurchaseHistorys()
        {
            return _context.PurchaseHistory.ToList();
        }

    }
}
