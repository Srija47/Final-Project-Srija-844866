using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.BuyerService.Models;


namespace EMart.BuyerService.Repositories
{
    public interface IBuyerRepository
    {
        List<Items> SearchItems(string itemname);
        List<Items> SearchItemByCategory(int catgeoryid);
        List<Items> SearchItemBySubCategory(int subcategoryid);
        public void BuyItem(PurchaseHistory purchase);
        public Buyer GetProfileBuyer(int bid);
        public void EditProfileBuyer(Buyer buyer);
        List<PurchaseHistory> PurchaseHistorys(int bid);
        List<Category> GetCategories();
        List<SubCategory> SubCategories(int categoryid);
        List<Items> GetAllItems();
        public Cart GetCartItemById(int id);
        public void AddtoCart(Cart cart);
        List<Cart> GetCartItems();
        public void DeleteCartItem(int id);
        public List<PurchaseHistory> GetPurchaseHistorys();

    }
}
