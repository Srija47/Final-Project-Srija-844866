using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;

namespace EmartTestProject
{
    class TestItemRepository
    {
        ItemRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new ItemRepository(new EMartDBContext());
        }
        [Test]
        [Description("To Test Add Items")]
        public void TestAddItems()
        {
            _repo.AddItem(new Items()
            {
                Id = 12351,
                Categoryid = 123,
                Subcategoryid = 1235,
                Price="20000",
                Itemname = "Smartphone",
                Description="Realv4.0",
                Stocknumber=34353454,
                Remarks = "Nothing",
                Sid=1234,
                Imagename="smartphone.jpg"
            });
            var result = _repo.ViewItems(12351);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("To Test Get Items by id")]
        public void TestGetItem()
        {
            var result = _repo.GetItem(12351);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test View Items by ID")]
        public void TestViewItems()
        {
            var result = _repo.ViewItems(12351);
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetAllCategories()
        {
            var result = _repo.GetAllCategories();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        public void TestGetAllSubCategories()
        {
            var result = _repo.GetAllSubCategories(163);
            Assert.NotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("To Test Update Items")]
        public void TestUpdateItem()
        {
            //Arrange
            Items item = _repo.GetItem(12351);
            item.Price = "1200";
            _repo.UpdateItem(item);
            Items item1 = _repo.GetItem(12351);
            Assert.AreSame(item, item1);
        }
        [Test]
        [Description("To Test delete item")]
        public void  TestDeleteItem()
        {
            _repo.DeleteItem(12351);
            var result = _repo.GetItem(12351);
            Assert.Null(result);
        }
    }
}
