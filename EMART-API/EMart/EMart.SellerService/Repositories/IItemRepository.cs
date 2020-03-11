using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;

namespace EMart.SellerService.Repositories
{
    public interface IItemRepository
    {
        List<Items> ViewItems(int id);
        Items GetItem(int id);
        public void AddItem(Items obj);
        public void DeleteItem(int id);
        public void UpdateItem(Items item);
        string ViewStock(int id);
        List<Category> GetAllCategories();
        List<SubCategory> GetAllSubCategories(int categoryid);
    }
}
