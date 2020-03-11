﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.AccountService.Models;
using EMart.AccountService.Repositories;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace EMart.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _repo;
        private readonly IConfiguration configuration;
        public AccountController(IAccountRepository repo,IConfiguration configuration)
        {
            _repo = repo;
            this.configuration = configuration;
        }
        [HttpPost]
        [Route("register-buyer")]
        public IActionResult Buyer(Buyer buyer)
        {
            try
            {
                _repo.BuyerRegister(buyer);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("register-seller")]
        public IActionResult Seller(Seller seller)
        {
            try
            {
                _repo.SellerRegister(seller);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("buyerlogin/{uname},{pwd}")]
        public IActionResult BuyerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Buyer b = _repo.BuyerLogin(uname, pwd);
                if (b != null)
                {
                    token = new Token() { buyerid = b.Bid, token = GenerateJwtToken(uname), message = "Success" };
                }
                else
                {
                    token = new Token() { token = null, message = "UnSuccess" };
                }
                return Ok(token);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("sellerlogin/{uname},{pwd}")]
        public IActionResult SellerLogin(string uname, string pwd)
        {
            Token token = null;
            try
            {
                Seller s = _repo.SellerLogin(uname, pwd);
                if (s != null)
                {
                    token = new Token() { sellerid = s.Sid, token = GenerateJwtToken(uname), message = "Success" };
                }
                else
                {
                    token = new Token() { token = null, message = "UnSuccess" };
                }
                return Ok(token);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        /*Token based authentication*/
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}