using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EMart.BuyerService.Models;
using EMart.BuyerService.Repositories;

namespace EMart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory purchase)
        {
            try
            {
                _repo.BuyItem(purchase);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Edit(Buyer buyer)
        {
            try
            {
                _repo.EditProfileBuyer(buyer);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{bid}")]
        public IActionResult Get(int bid)
        {
            try
            {
                return Ok(_repo.GetProfileBuyer(bid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("PurchaseHistory/{bid}")]
        public IActionResult PurchaseHistory(int bid)
        {
            try
            {
                return Ok(_repo.PurchaseHistorys(bid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult GetAllItems()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SearchItems/{itemname}")]
        public IActionResult SearchItems(string itemname)
        {
            try
            {
                return Ok(_repo.SearchItems(itemname));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemByCategory/{categoryid}")]
        public IActionResult SearchItemByCategory(int categoryid)
        {
            try
            {
                return Ok(_repo.SearchItemByCategory(categoryid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemBySubCategory/{subcategoryid}")]
        public IActionResult SearchItemBySubCategory(int subcategoryid)
        {
            try
            {
                return Ok(_repo.SearchItemBySubCategory(subcategoryid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCategory")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategory/{categoryid}")]
        public IActionResult GetSubCategory(int categoryid)
        {
            try
            {
                return Ok(_repo.SubCategories(categoryid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPost]
        [Route("AddtoCart")]
        public IActionResult AddtoCart(Cart cart)
        {
            try
            {
                _repo.AddtoCart(cart);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCartItems")]
        public IActionResult GetCartItems()
        {
            try
            {
                return Ok(_repo.GetCartItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCartItem/{id}")]
        public IActionResult DeleteCartItem(int id)
        {
            try
            {
                _repo.DeleteCartItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetPurchaseHistory")]
        public IActionResult GetPurchaseHistorys()
        {
            try
            {
                return Ok(_repo.GetPurchaseHistorys());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}