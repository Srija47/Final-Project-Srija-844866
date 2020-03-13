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
                Bid = 123,
                Username = "Ram",
                Password = "Ramchandra&",
                Emailid = "ramchandra@gmail.com",
                Mobileno="8814567234",
                Datetime = System.DateTime.Now
            });
            var result = _repo.BuyerLogin("Ram","Ramchandra&");
            Assert.NotNull(result);
        }
        [Test]
        public void TestSellerRegister()
        {
            _repo.SellerRegister(new Seller()
            {
                Sid = 6234,
                Username = "Sita",
                Password = "Sitasheers&",
                Companyname="Pharma",
                Gst=789524,
                Aboutcmpy="Healthcare",
                Address="Bangalore",
                Website="pharma.co",
                Email = "pharma@gmail.com",
                Mobileno="9356789124"
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
