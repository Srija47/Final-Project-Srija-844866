using System;
using System.Collections.Generic;
using System.Text;
using EMart.AccountService.Repositories;
using NUnit.Framework;
using EMart.AccountService.Models;

namespace EmartTestProject
{
    class TestAccountRepository
    {
        AccountRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new AccountRepository(new EMartDBContext());
        }
        [Test]
        public void TestBuyerRegister()
        {
            _repo.BuyerRegister(new Buyer()
            {
                Bid = 234,
                Username = "Sherlock",
                Password = "Sherlock!",
                Emailid = "sherlock@gmail.com",
                Mobileno="8956145278",
                Datetime = System.DateTime.Now
            });
            var result = _repo.BuyerLogin("Sherlock","Sherlock!");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Sid = 6234,
                Username = "Holmes",
                Password = "Holmesvault&",
                Companyname="Gasoline",
                Gst=456123,
                Aboutcmpy="Productive",
                Address="Bangalore",
                Website="gasoline.co",
                Email = "gasoline@gmail.com",
                Mobileno="9523614523"
            });
            var result = _repo.SellerLogin("Holmes","Holmesvault&");
            Assert.NotNull(result);
        }
        [Test]
        public void TestBuyerLogin()
        {
            var result = _repo.BuyerLogin("Chandini", "Chandinik!");
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestSellerLogin()
        {
            var result = _repo.SellerLogin("Srija", "Srijasri@");
            Assert.IsNotNull(result);
        }
    }
}
