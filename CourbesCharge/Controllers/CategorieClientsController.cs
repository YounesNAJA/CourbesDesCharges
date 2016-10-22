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
    public class CategorieClientsController : Controller
    {
        private CourbeChargeEntities db = new CourbeChargeEntities();

        // GET: CategorieClients
        [Authorize]
        public ActionResult Index()
        {
            return View(db.CategorieClient.ToList());
        }

        // GET: CategorieClients/Details/5
        [Authorize]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategorieClient categorieClient = db.CategorieClient.Find(id);
            if (categorieClient == null)
            {
                return HttpNotFound();
            }
            return View(categorieClient);
        }

        // GET: CategorieClients/Create
        [Authorize]
        public ActionResult Create()
        {
            return View();
        }

        // POST: CategorieClients/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "IdCategorie,NomCategorie")] CategorieClient categorieClient)
        {
            if (ModelState.IsValid)
            {
                db.CategorieClient.Add(categorieClient);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(categorieClient);
        }

        // GET: CategorieClients/Edit/5
        [Authorize]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategorieClient categorieClient = db.CategorieClient.Find(id);
            if (categorieClient == null)
            {
                return HttpNotFound();
            }
            return View(categorieClient);
        }

        // POST: CategorieClients/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize]
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "IdCategorie,NomCategorie")] CategorieClient categorieClient)
        {
            if (ModelState.IsValid)
            {
                db.Entry(categorieClient).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(categorieClient);
        }

        // GET: CategorieClients/Delete/5
        [Authorize]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            CategorieClient categorieClient = db.CategorieClient.Find(id);
            if (categorieClient == null)
            {
                return HttpNotFound();
            }
            return View(categorieClient);
        }

        // POST: CategorieClients/Delete/5
        [Authorize]
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            CategorieClient categorieClient = db.CategorieClient.Find(id);
            db.CategorieClient.Remove(categorieClient);
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
