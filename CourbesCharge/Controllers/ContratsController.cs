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
    public class ContratsController : Controller
    {
        private CourbeChargeEntities db = new CourbeChargeEntities();

        // GET: Contrats
        [Authorize]
        public ActionResult Index()
        {
            var contrat = db.Contrat.Include(c => c.Client);
            return View(contrat.ToList());
        }

        // GET: Contrats/Details/5
        [Authorize]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contrat contrat = db.Contrat.Find(id);
            if (contrat == null)
            {
                return HttpNotFound();
            }
            return View(contrat);
        }

        // GET: Contrats/Create
        [Authorize]
        public ActionResult Create()
        {
            ViewBag.IdClient = new SelectList(db.Client, "IdClient", "Nom");
            return View();
        }

        // POST: Contrats/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Create([Bind(Include = "IdContrat,DateContrat,ReferenceContrat,Description,IdClient")] Contrat contrat)
        {
            if (ModelState.IsValid)
            {
                db.Contrat.Add(contrat);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdClient = new SelectList(db.Client, "IdClient", "Nom", contrat.IdClient);
            return View(contrat);
        }

        // GET: Contrats/Edit/5
        [Authorize]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contrat contrat = db.Contrat.Find(id);
            if (contrat == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdClient = new SelectList(db.Client, "IdClient", "Nom", contrat.IdClient);
            return View(contrat);
        }

        // POST: Contrats/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Edit([Bind(Include = "IdContrat,DateContrat,ReferenceContrat,Description,IdClient")] Contrat contrat)
        {
            if (ModelState.IsValid)
            {
                db.Entry(contrat).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdClient = new SelectList(db.Client, "IdClient", "Nom", contrat.IdClient);
            return View(contrat);
        }

        // GET: Contrats/Delete/5
        [Authorize]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Contrat contrat = db.Contrat.Find(id);
            if (contrat == null)
            {
                return HttpNotFound();
            }
            return View(contrat);
        }

        // POST: Contrats/Delete/5
        [Authorize]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            Contrat contrat = db.Contrat.Find(id);
            db.Contrat.Remove(contrat);
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
