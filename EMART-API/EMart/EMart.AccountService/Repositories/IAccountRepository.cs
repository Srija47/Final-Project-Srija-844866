using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EMart.AccountService.Models;

namespace EMart.AccountService.Repositories
{
    public interface IAccountRepository
    {
        void BuyerRegister(Buyer buyer);
        void SellerRegister(Seller seller);
        public Buyer BuyerLogin(string uname, string pwd);
        public Seller SellerLogin(string uname, string pwd);
    }
}
