using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace EmartTestProject
{
    class TestBuyerRepository
    {
        BuyerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new BuyerRepository(new EMartDBContext());
        }
        [Test]
        [Description("To Test Items can be Purchased")]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id=678,
                Bid=586,
                Sid=1,
                Transactiontype ="Debit",
                Itemid=678957,
                Noofitems=3,
                Datetime=System.DateTime.Now,
                Remarks="Nothing"
            }) ;
            var result = _repo.GetCartItems(586);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Buyer get profile functionality")]
        public void TestGetProfile()
        {
            var result = _repo.GetProfileBuyer(489);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("To Test Update buyer profile")]
        public void TestEditProfile()
        {
            //Arrange
            Buyer buyer= _repo.GetProfileBuyer(489);
            buyer.Mobileno = "9545675897";
            _repo.EditProfileBuyer(buyer);
            Buyer buyer1= _repo.GetProfileBuyer(489);
            Assert.AreSame(buyer,buyer1);
        }
        [Test]
        [Description("To Test Categories list display")]
        public void TestGetCategories()
        {
            var result = _repo.GetCategories();
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test SubCategories list display")]
        public void TestSubCategories()
        {
            var result = _repo.SubCategories(163);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Items list display")]
        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test PurcahseHistorys list")]
        public void TestGetPurchaseHistorys()
        {
            var result = _repo.GetPurchaseHistorys();
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test PurcahseHistorys list by buyer id")]
        public void TestPurchaseHistorys()
        {
            var result = _repo.PurchaseHistorys(163);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Search an Item by ItemName")]
        public void TestSearchItems()
        {
            var result = _repo.SearchItems("smartphone");
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Search an Item by Categoryid")]
        public void TestSearchItemsByCategory()
        {
            var result = _repo.SearchItemByCategory(163);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Search an Item by Subcategoryid")]
        public void TestSearchItemsBySubCategory()
        {
            var result = _repo.SearchItemBySubCategory(1234);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Cart Items are added")]
        public void TestAddtoCart()
        {
            _repo.AddtoCart(new Cart
            {
                Id = 5670977,
                Categoryid = 1,
                Subcategoryid = 3,
                Bid = 489,
                Sid = 1234,
                Itemid = 868,
                Price = "20000",
                Itemname = "Glasses",
                Description = "Real",
                Stocknumber = 1233445,
                Remarks = "GoodFeelInTouch",
                Imagename = "glasses.jpg"

            });
            var result = _repo.GetCartItems(489);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test Cart Items to display")]
        public void TestGetCartItems()
        {
            var result = _repo.GetCartItems(489);
            Assert.NotNull(result);
        }
        [Test]
        [Description("To Test whether Cart Item is deleted or not by cart id")]
        public void TestDeleteCartItem()
        {
            _repo.DeleteCartItem(5670977);
            var result = _repo.GetCartItemById(5670977);
            Assert.Null(result);
        }


    }
}
