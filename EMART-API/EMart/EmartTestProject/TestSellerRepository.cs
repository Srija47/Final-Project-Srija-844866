using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using EMart.SellerService.Models;
using EMart.SellerService.Repositories;

namespace EmartTestProject
{
    class TestSellerRepository
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EMartDBContext());
        }
        [Test]
        [Description("To Test Seller get profile functionality")]
        public void TestGetProfileSeller()
        {
            var result = _repo.GetProfile(1234);
            Assert.IsNotNull(result);
        }
        [Test]
        [Description("To Test Update seller profile")]
        public void TestEditProfile()
        {
            //Arrange
            Seller seller = _repo.GetProfile(1234);
            seller.Mobileno = "9524595677";
            _repo.EditProfile(seller);
            Seller seller1 = _repo.GetProfile(1234);
            Assert.AreSame(seller, seller1);
        }
    }
}
