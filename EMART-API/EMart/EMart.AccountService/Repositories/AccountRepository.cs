using EMart.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EMart.AccountService.Repositories
{
    public class AccountRepository:IAccountRepository
    {
        private readonly EMartDBContext _context;
        public AccountRepository(EMartDBContext context)
        {
            _context = context;
        }

        public Buyer BuyerLogin(string uname, string pwd)
        {
            Buyer b = _context.Buyer.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
            return b;
        }

        public void BuyerRegister(Buyer buyer)
        {
            _context.Add(buyer);
            _context.SaveChanges();
        }

        public Seller SellerLogin(string uname, string pwd)
        {
            Seller s = _context.Seller.SingleOrDefault(e => e.Username == uname && e.Password == pwd);
            return s;
        }

        public void SellerRegister(Seller seller)
        {
            _context.Add(seller);
            _context.SaveChanges();
        }
    }
}
