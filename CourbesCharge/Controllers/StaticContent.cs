using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CourbesCharge.Controllers
{
    public class StaticContent : Controller
    {
        // GET: StaticContent
        public ActionResult PageNotFound()
        {
            return View();
        }
    }
}