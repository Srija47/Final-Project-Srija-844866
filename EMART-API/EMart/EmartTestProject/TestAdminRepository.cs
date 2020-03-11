using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.AdminService.Models;
using EMart.AdminService.Repositories;

namespace EmartTestProject
{
    class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AdminRepository(new EMartDBContext());
        }
        [Test]
        public void TestAddCategory()
        {
            _repo.AddCategory(new Category()
            {
               Categoryid=123,
               Categoryname="Health",
               Categorybrief="ShopHealthCare"
            });
            var result = _repo.GetCategories();
            Assert.NotNull(result);
        }
        [Test]
        public void TestAddSubCategory()
        {
            _repo.AddSubCategory(new SubCategory()
            {
                Subcategoryid =1235,
                Subcategoryname = "WomensHealth",
                Subcategorybrief = "ShopWomensHealth",
                Categoryid=123,
                Gst=456123
            });
            var result = _repo.GetSubCategories();
            Assert.NotNull(result);
        }
        [Test]
        public void TestDeleteCategory()
        {
            _repo.DeleteCategory(123);
            var result = _repo.GetCategoryById(123);
            Assert.Null(result);
        }
        [Test]
        public void TestDeleteSubCategory()
        {
            _repo.DeleteSubCategory(1235);
            var result = _repo.GetSubCategoryById(1235);
            Assert.Null(result);
        }

    }
}
