using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AdminService.Models;

namespace EMart.AdminService.Repositories
{
    public interface IAdminRepository
    {
        public void AddCategory(Category category);
        public void AddSubCategory(SubCategory subCategory);
        public void DeleteCategory(int categoryid);
        public void DeleteSubCategory(int subcategoryid);
        public List<Category> GetCategories();
        public List<SubCategory> GetSubCategories();
        public Category GetCategoryById(int categoryid);
        public SubCategory GetSubCategoryById(int subcategoryid);
    }
}
