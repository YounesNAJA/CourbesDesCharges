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
    public class InstallationsController : Controller
    {
        private CourbeChargeEntities db = new CourbeChargeEntities();

        // GET: Installations
        public ActionResult Index()
        {
            var installation = db.Installation.Include(i => i.Compteur).Include(i => i.Contrat);
            return View(installation.ToList());
        }

        // GET: Installations/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Installation installation = db.Installation.Find(id);
            if (installation == null)
            {
                return HttpNotFound();
            }
            return View(installation);
        }

        // GET: Installations/Create
        public ActionResult Create()
        {
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque");
            ViewBag.IdContrat = new SelectList(db.Contrat, "IdContrat", "ReferenceContrat");
            return View();
        }

        // POST: Installations/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "IdInstallation,DateAmenagement,Adresse,IdCompteur,IdContrat")] Installation installation)
        {
            if (ModelState.IsValid)
            {
                db.Installation.Add(installation);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", installation.IdCompteur);
            ViewBag.IdContrat = new SelectList(db.Contrat, "IdContrat", "ReferenceContrat", installation.IdContrat);
            return View(installation);
        }

        // GET: Installations/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Installation installation = db.Installation.Find(id);
            if (installation == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", installation.IdCompteur);
            ViewBag.IdContrat = new SelectList(db.Contrat, "IdContrat", "ReferenceContrat", installation.IdContrat);
            return View(installation);
        }

        // POST: Installations/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "IdInstallation,DateAmenagement,Adresse,IdCompteur,IdContrat")] Installation installation)
        {
            if (ModelState.IsValid)
            {
                db.Entry(installation).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", installation.IdCompteur);
            ViewBag.IdContrat = new SelectList(db.Contrat, "IdContrat", "ReferenceContrat", installation.IdContrat);
            return View(installation);
        }

        // GET: Installations/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Installation installation = db.Installation.Find(id);
            if (installation == null)
            {
                return HttpNotFound();
            }
            return View(installation);
        }

        // POST: Installations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Installation installation = db.Installation.Find(id);
            db.Installation.Remove(installation);
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
    }
}
