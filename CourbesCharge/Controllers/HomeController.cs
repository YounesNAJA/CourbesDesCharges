using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CourbesCharge.Controllers
{
    public class HomeController : Controller
    {
        [Authorize]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "ONEE - Traitement des courbes de charge des client Moyenne Tension.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Contactez l'administrateur à l'adresse : naja.younes@gmail.com";

            return View();
        }
    }
}