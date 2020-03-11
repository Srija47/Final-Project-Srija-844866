using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;

namespace EMart.SellerService.Repositories
{
    public class ItemRepository : IItemRepository
    {
        private readonly EMartDBContext _context;
        public ItemRepository(EMartDBContext context)
        {
            _context = context;
        }
        public void AddItem(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();
        }

        public void DeleteItem(int id)
        {
            Items item = _context.Items.Find(id);
            _context.Remove(item);
            _context.SaveChanges();
        }

        public Items GetItem(int id)
        {
           return _context.Items.Find(id);
        }

        public void UpdateItem(Items item)
        {
            _context.Items.Update(item);
            _context.SaveChanges();
        }
        public string ViewStock(int id)
        {
            Items item = _context.Items.Find(id);
            return "No.Of StockItems" + item.Stocknumber;
        }
        public List<Items> ViewItems(int id)
        {
            //return _context.Items.ToList();
            List<Items> item = _context.Items.Where(i => i.Sid == id).ToList();
            return item;
        }
        public List<Category> GetAllCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetAllSubCategories(int categoryid)
        {
            return _context.SubCategory.Where(s => s.Categoryid == categoryid).ToList();
        }
    }
}
