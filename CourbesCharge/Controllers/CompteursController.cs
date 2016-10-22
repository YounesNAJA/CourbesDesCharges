using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using CourbesCharge.Models;

namespace CourbesCharge.Controllers
{
    public class CompteursController : Controller
    {
        private CourbeChargeEntities db = new CourbeChargeEntities();

        // GET: Compteurs
        [Authorize]
        public ActionResult Index()
        {
            return View(db.Compteur.ToList());
        }

        // GET: Compteurs/Details/5
        [Authorize]
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Compteur compteur = db.Compteur.Find(id);
            if (compteur == null)
            {
                return HttpNotFound();
            }
            return View(compteur);
        }

        // GET: Compteurs/Create
        [Authorize]
        public ActionResult Create()
        {
            return View();
        }

        // POST: Compteurs/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Create([Bind(Include = "IdCompteur,Marque,Serie,Description")] Compteur compteur)
        {
            if (ModelState.IsValid)
            {
                db.Compteur.Add(compteur);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(compteur);
        }

        // GET: Compteurs/Edit/5
        [Authorize]
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Compteur compteur = db.Compteur.Find(id);
            if (compteur == null)
            {
                return HttpNotFound();
            }
            return View(compteur);
        }

        // POST: Compteurs/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Edit([Bind(Include = "IdCompteur,Marque,Serie,Description")] Compteur compteur)
        {
            if (ModelState.IsValid)
            {
                db.Entry(compteur).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(compteur);
        }

        // GET: Compteurs/Delete/5
        [Authorize]
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Compteur compteur = db.Compteur.Find(id);
            if (compteur == null)
            {
                return HttpNotFound();
            }
            return View(compteur);
        }

        // POST: Compteurs/Delete/5
        [Authorize]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            Compteur compteur = db.Compteur.Find(id);
            db.Compteur.Remove(compteur);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        [Authorize]
        public ActionResult Courbes(string IdCompteur = "")
        {
            if (TempData.ContainsKey("Error"))
            {
                ViewBag.Error = TempData["Error"].ToString();
            }

            if (IdCompteur.Equals(""))
            {
                return View(db.Compteur.ToList());
            }
            else
            {
                return View(db.Compteur.Where(c => c.IdCompteur.Equals(IdCompteur)).ToList());
            }
        }
    }
}
