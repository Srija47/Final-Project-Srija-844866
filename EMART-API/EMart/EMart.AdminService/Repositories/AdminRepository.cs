using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminService.Models;
using EMart.AdminService.Repositories;

namespace EMart.AdminService.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private readonly EMartDBContext _context;
        public AdminRepository(EMartDBContext context)
        {
            _context = context;
        }
        public void AddCategory(Category category)
        {
            _context.Add(category);
            _context.SaveChanges();
        }

        public void AddSubCategory(SubCategory subCategory)
        {
            _context.Add(subCategory);
            _context.SaveChanges();
        }

        public void DeleteCategory(int categoryid)
        {
            Category c = _context.Category.Find(categoryid);
            _context.Remove(c);
            _context.SaveChanges();
        }

        public void DeleteSubCategory(int subcategoryid)
        {
            SubCategory s = _context.SubCategory.Find(subcategoryid);
            _context.Remove(s);
            _context.SaveChanges();
        }
        public List<Category> GetCategories()
        {
            return _context.Category.ToList();
        }
        public List<SubCategory> GetSubCategories()
        {
            return _context.SubCategory.ToList();
        }
        public Category GetCategoryById(int categoryid)
        {
            return _context.Category.Find(categoryid);
        }
        public SubCategory GetSubCategoryById(int subcategoryid)
        {
            return _context.SubCategory.Find(subcategoryid);
        }
    }
}
