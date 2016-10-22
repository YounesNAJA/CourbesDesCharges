using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Web.WebPages;
using CourbesCharge.Models;
using Microsoft.Ajax.Utilities;
using Excel = Microsoft.Office.Interop.Excel;

namespace CourbesCharge.Controllers
{
    public class ConsommationsController : Controller
    {
        private CourbeChargeEntities db = new CourbeChargeEntities();

        // GET: Consommations
        [Authorize]
        public ActionResult Index()
        {
            var consommation = db.Consommation.Include(c => c.Compteur);
            return View(consommation.ToList());
        }

        // GET: Consommations/Details/5
        [Authorize]
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Consommation consommation = db.Consommation.Find(id);
            if (consommation == null)
            {
                return HttpNotFound();
            }
            return View(consommation);
        }

        // GET: Consommations/Create
        [Authorize]
        public ActionResult Create()
        {
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque");
            return View();
        }

        // POST: Consommations/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Create([Bind(Include = "IdConsommation,DateConsommation,IntervalleCalcul,PuissanceActive,PuissanceReactive,IdCompteur")] Consommation consommation)
        {
            if (ModelState.IsValid)
            {
                db.Consommation.Add(consommation);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", consommation.IdCompteur);
            return View(consommation);
        }

        // GET: Consommations/Edit/5
        [Authorize]
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Consommation consommation = db.Consommation.Find(id);
            if (consommation == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", consommation.IdCompteur);
            return View(consommation);
        }

        // POST: Consommations/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult Edit([Bind(Include = "IdConsommation,DateConsommation,IntervalleCalcul,PuissanceActive,PuissanceReactive,IdCompteur")] Consommation consommation)
        {
            if (ModelState.IsValid)
            {
                db.Entry(consommation).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdCompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", consommation.IdCompteur);
            return View(consommation);
        }

        // GET: Consommations/Delete/5
        [Authorize]
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Consommation consommation = db.Consommation.Find(id);
            if (consommation == null)
            {
                return HttpNotFound();
            }
            return View(consommation);
        }

        // POST: Consommations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize]
        public ActionResult DeleteConfirmed(int id)
        {
            Consommation consommation = db.Consommation.Find(id);
            db.Consommation.Remove(consommation);
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

        // Import file form
        [Authorize]
        public ActionResult Sendfile()
        {
            return View();
        }

        // Importer un fichier Excel
        [HttpPost]
        [Authorize]
        public ActionResult Import(HttpPostedFileBase ExcelFile)
        {
            if (ExcelFile == null || ExcelFile.ContentLength == 0)
            {
                ViewBag.Error = "Veuillez selectionner un fichier Excel<br />";
                return View("Sendfile");
            }
            else
            {
                if (ExcelFile.FileName.EndsWith("xls") || ExcelFile.FileName.EndsWith("xlsx"))
                {
                    string path = Server.MapPath("~/Content/" + ExcelFile.FileName);
                    if (System.IO.File.Exists(path))
                    {
                        System.IO.File.Delete(path);
                    }
                    ExcelFile.SaveAs(path);

                    Excel.Application application = new Excel.Application();
                    Excel.Workbook workbook = application.Workbooks.Open(path);
                    Excel.Worksheet worksheet = workbook.ActiveSheet;
                    Excel.Range range = worksheet.UsedRange;

                    List<Consommation> listeConsommations = new List<Consommation>();
                    string IdCompteurE = "";

                    var listeCompteurs = new List<string>();
                    listeCompteurs = db.Compteur.Select(c => c.IdCompteur).Distinct().ToList();
                    string IdCompteurLast = "";

                    for (int row = 2; row < range.Rows.Count; row++)
                    {
                        IdCompteurE = ((Excel.Range)range.Cells[row, 1]).Text;

                        if (string.IsNullOrEmpty(IdCompteurE) || string.IsNullOrWhiteSpace(IdCompteurE))
                        {
                            workbook.Close(0);
                            application.Quit();
                            /*
                             * Afficher les courbes de charges
                             */
                            // ViewBag.ListConsommations = listeConsommations;
                            return RedirectToAction("Courbes", "Compteurs", new {IdCompteur = IdCompteurLast});
                        }
                        else
                        {
                            IdCompteurLast = ((Excel.Range)range.Cells[row, 1]).Text;
                        }

                        // Vérifie la présence du compteur
                        if (!listeCompteurs.Contains(IdCompteurE))
                        {
                            ViewBag.Error = ViewBag.Error + "La ligne " + row + " contient un numéro de compteur introuvable.";
                            workbook.Close(0);
                            application.Quit();
                            return View("Sendfile");
                        }

                        //for (int i = 0; i < 6; i++)
                        //{
                        //    // Vérifie la présence d'une cellule vide
                        //    if (((Excel.Range)range.Cells[row, i]).Text == null || ((Excel.Range)range.Cells[row, i]).Text == "")
                        //    {
                        //        ViewBag.Error = ViewBag.Error + "La ligne " + row + " contient une cellule vide.";
                        //        workbook.Close(0);
                        //        application.Quit();
                        //        return View("Sendfile");
                        //    }
                        //}

                        //string Date = ((Excel.Range)range.Cells[row, 2]).Text;
                        string Date;
                        DateTime dt;
                        if (DateTime.TryParse(((Excel.Range)range.Cells[row, 2]).Text, out dt))
                        {
                            //String.Format("{0:dd/MM/yyyy}", Date);
                            //Date = DateTime.ParseExact(((Excel.Range)range.Cells[row, 2]).Text, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                            //Date = DateTime.ParseExact(((Excel.Range)range.Cells[row, 2]).Text, "dd/MM/yyyy", null);
                            Date = ((Excel.Range)range.Cells[row, 2]).Text;
                        }
                        else
                        {
                            ViewBag.Error = ViewBag.Error + "La ligne " + row + " contient une date invalide.";
                            workbook.Close(0);
                            application.Quit();
                            return View("Sendfile");
                        }

                        string Time = ((Excel.Range)range.Cells[row, 3]).Text;

                        var pattern = "^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";

                        // Instantiate the regular expression object.
                        Regex r = new Regex(pattern, RegexOptions.IgnoreCase);

                        // Match the regular expression pattern against a text string.
                        Match timeMatch = r.Match(Time);
                        if (!timeMatch.Success)
                        {
                            ViewBag.Error = ViewBag.Error + "La ligne " + row + " contient un horaire invalide.";
                            workbook.Close(0);
                            application.Quit();
                            return View("Sendfile");
                        }

                        string StringDateTime = Date + " " + Time + ":00";
                        DateTime dateTime = DateTime.ParseExact(StringDateTime, "dd/MM/yyyy HH:mm:ss", System.Globalization.CultureInfo.InvariantCulture);
                        //DateTime dateTime = DateTime.ParseExact(StringDateTime, "dd/MM/yyyy HH:mm:ss", null);

                        
                        var intIntervalle = 0;

                        if (!int.TryParse(((Excel.Range)range.Cells[row, 4]).Text, out intIntervalle))
                        {
                            ViewBag.Error = ViewBag.Error + "L'intervalle de calcul de la ligne " + row + " est erroné.";
                            workbook.Close(0);
                            application.Quit();
                            return View("Sendfile");
                        }

                        int Intervalle = Int32.Parse(((Excel.Range)range.Cells[row, 4]).Text);

                        double doubleAct = 0;

                        double Act;
                        if (string.IsNullOrEmpty(((Excel.Range)range.Cells[row, 5]).Text))
                        {
                            if (row > 2)
                            {
                                Act = Double.Parse(((Excel.Range)range.Cells[row - 1, 5]).Text) + 1;
                            }
                            else
                            {
                                if (string.IsNullOrEmpty(((Excel.Range)range.Cells[row + 1, 5]).Text))
                                {
                                    Act = 0;
                                }
                                else
                                {
                                    Act = Double.Parse(((Excel.Range)range.Cells[row + 1, 5]).Text) - 1;
                                }
                            }
                        }
                        else
                        {
                            if (!Double.TryParse(((Excel.Range)range.Cells[row, 5]).Text, out doubleAct))
                            {
                                ViewBag.Error = ViewBag.Error + "La puissance active de la ligne " + row + " est invalide.";
                                workbook.Close(0);
                                application.Quit();
                                return View("Sendfile");
                            }

                            Act = Double.Parse(((Excel.Range)range.Cells[row, 5]).Text);
                        }


                        double React;
                        if (string.IsNullOrEmpty(((Excel.Range) range.Cells[row, 6]).Text))
                        {
                            if (row > 2)
                            {
                                React = Double.Parse(((Excel.Range) range.Cells[row - 1, 6]).Text) + 1;
                            }
                            else
                            {
                                if (string.IsNullOrEmpty(((Excel.Range) range.Cells[row + 1, 6]).Text))
                                {
                                    React = 0;
                                }
                                else
                                {
                                    React = Double.Parse(((Excel.Range) range.Cells[row + 1, 6]).Text) - 1;
                                }
                            }
                        }
                        else
                        {
                            if (!Double.TryParse(((Excel.Range)range.Cells[row, 6]).Text, out doubleAct))
                            {
                                ViewBag.Error = ViewBag.Error + "La puissance réactive de la ligne " + row + " est invalide.";
                                workbook.Close(0);
                                application.Quit();
                                return View("Sendfile");
                            }

                            React = Double.Parse(((Excel.Range)range.Cells[row, 6]).Text);
                        }

                        Consommation consommation = new Consommation(dateTime, Intervalle, Act, React, IdCompteurE);
                        try
                        {
                            listeConsommations.Add(consommation);
                        }
                        catch (Exception E)
                        {
                            Console.WriteLine("Erreur lors de l'ajout de l'objet Consommation a la liste" + E.GetBaseException());
                        }

                        try
                        {
                            db.Consommation.Add(consommation);
                            db.SaveChanges();
                        }
                        catch (Exception E)
                        {
                            Console.WriteLine("Erreur lors de la mise a jour de le BD" + E.GetBaseException());
                        }
                    }

                    workbook.Close(0);
                    application.Quit();
                    /*
                     * Afficher les courbes de charges
                     */
                    // ViewBag.ListConsommations = listeConsommations;
                    return RedirectToAction("Courbes", "Compteurs", new { IdCompteur = IdCompteurE });

                }
                else
                {
                    ViewBag.Error = "Type de fichier non valide<br />";
                    return View("Sendfile");
                }
            }
        }

        // Afficher les données importées
        public ActionResult ShowCurve()
        {
            return View();
        }

        // Test des courbes
        public ActionResult TestCharts()
        {
            return View();
        }

        //public ActionResult TestAdd()
        //{

        //    Consommation Conso = new Consommation();
        //    // Conso.DateConsommation = new DateTime(2010, 12, 25);
        //    CultureInfo ci = CultureInfo.InvariantCulture;
        //    Conso.DateConsommation = new DateTime(2010, 12, 4, 15, 56, 22);
        //    Conso.IdCompteur = "1";
        //    Conso.IdConsommation = 10;
        //    Conso.IntervalleCalcul = 10;
        //    Conso.PuissanceActive = 2000.13;
        //    Conso.PuissanceReactive = 300017.35;
        //    if (ModelState.IsValid)
        //    {
        //        db.Consommation.Add(Conso);
        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    ViewBag.IdCcompteur = new SelectList(db.Compteur, "IdCompteur", "Marque", Conso.IdCompteur);
        //    return View(Conso);
        //}

        // Choix des courbes à visualiser
        public ActionResult Courbe()
        {
            ViewBag.Clients = db.Client.ToList();
            return View();
        }

        // GET: Consommations by IdCompteur
        //public ActionResult CompteurConso()
        //{
        //    var consommation = db.Consommation.Include(c => c.Compteur);
        //    return View(consommation.ToList());
        //}

        [Authorize]
        public ActionResult CourbeJournaliere(string id, DateTime date)
        {
            if (string.IsNullOrEmpty(id) || string.IsNullOrWhiteSpace(id))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            if (string.IsNullOrEmpty(date.ToString()) || string.IsNullOrWhiteSpace(date.ToString()))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            DateTime dt;
            if (!DateTime.TryParse(date.ToString(), out dt))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            date = Convert.ToDateTime(date).Date;
            var consommations = db.Consommation.Where(c => c.IdCompteur == id && c.DateConsommation.Year == date.Year && c.DateConsommation.Month == date.Month && c.DateConsommation.Day == date.Day).OrderBy(c => c.DateConsommation).ToList();
            if (consommations.Count == 0)
            {
                TempData["Error"] = "Données indisponibles.";
                return RedirectToAction("Courbes", "Compteurs");
            }

            ViewBag.Date = date.ToString("dd/MM/yyyy");
            ViewBag.Day = date.Day;
            ViewBag.Month = Convert.ToInt32(date.Month);
            ViewBag.Hour = consommations.Last().DateConsommation.Hour;

            Consommation MaxPA = consommations.Where(c => c.PuissanceActive == consommations.Max(a => a.PuissanceActive)).FirstOrDefault();
            Consommation MinPA = consommations.Where(c => c.PuissanceActive == consommations.Min(a => a.PuissanceActive)).FirstOrDefault();
            Consommation MaxPR = consommations.Where(c => c.PuissanceReactive == consommations.Max(a => a.PuissanceReactive)).FirstOrDefault();
            Consommation MinPR = consommations.Where(c => c.PuissanceReactive == consommations.Min(a => a.PuissanceReactive)).FirstOrDefault();
            ViewBag.MaxPA = MaxPA;
            ViewBag.MinPA = MinPA;
            ViewBag.MaxPR = MaxPR;
            ViewBag.MinPR = MinPR;

            var Compteur = db.Compteur.Where(c => c.IdCompteur == MaxPA.IdCompteur).ToList();
            var IdCompteur = Compteur.FirstOrDefault().IdCompteur.ToString();

            var Installation = db.Installation.Where(i => i.IdCompteur == IdCompteur).ToList();
            var InstallationIdContrat = Installation.FirstOrDefault().IdContrat;

            var Contrat = db.Contrat.Where(c => c.IdContrat == InstallationIdContrat).ToList();
            var ContratClient = Contrat.FirstOrDefault().IdClient;

            var Client = db.Client.Where(c => c.IdClient == ContratClient).FirstOrDefault();

            var ContratSingle = Contrat.FirstOrDefault();
            var InstallationSingle = Installation.FirstOrDefault();
            var CompteurSingle = Compteur.FirstOrDefault();

            var DateContrat = ContratSingle.DateContrat.ToString("dddd dd MMM yyyy");
            var RefContrat = ContratSingle.ReferenceContrat;
            var DateAmenag = InstallationSingle.DateAmenagement.ToString("dddd dd MMM yyyy"); ;
            var Localite = InstallationSingle.Adresse;
            var Marque = CompteurSingle.Marque;
            var Serie = CompteurSingle.Serie;

            IDictionary<string, string> ClientInfo = new Dictionary<string, string>()
            {
                { "Date du Contrat", DateContrat },
                { "Reference Contrat", RefContrat },
                { "Date Amenag", DateAmenag },
                { "Localite", Localite },
                { "Marque", Marque },
                { "Serie", Serie }
            };

            ViewBag.ClientInfo = ClientInfo;
            ViewBag.Client = Client;

            ViewBag.IdCompteur = IdCompteur;

            return View(consommations);
        }

        [Authorize]
        public ActionResult CourbeMensuelle(string id, DateTime mois)
        {

            if (string.IsNullOrEmpty(id) || string.IsNullOrWhiteSpace(id))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            if (string.IsNullOrEmpty(mois.ToString()) || string.IsNullOrWhiteSpace(mois.ToString()))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            DateTime dt;
            if (!DateTime.TryParse(mois.ToString(), out dt))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }


            // Puissance Active Max
            var consommationsHp = new List<Consommation>();
            var consommationsHc = new List<Consommation>();
            var consommationsHpl = new List<Consommation>();

            var allConsommations = new List<Consommation>();

            // Puissance Réactive Max
            var consommationsHpR = new List<Consommation>();
            var consommationsHcR = new List<Consommation>();
            var consommationsHplR = new List<Consommation>();

            var allConsommationsR = new List<Consommation>();

            // Puissance Active Min
            var consommationsHpMin = new List<Consommation>();
            var consommationsHcMin = new List<Consommation>();
            var consommationsHplMin = new List<Consommation>();

            var allConsommationsMin = new List<Consommation>();

            // Puissance Réactive Min
            var consommationsHpRMin = new List<Consommation>();
            var consommationsHcRMin = new List<Consommation>();
            var consommationsHplRMin = new List<Consommation>();

            var allConsommationsRMin = new List<Consommation>();

            var hp = new List<Consommation>();
            var hc = new List<Consommation>();
            var hpl = new List<Consommation>();

            var consommations = db.Consommation.Where(c => c.IdCompteur == id && c.DateConsommation.Year == mois.Year && c.DateConsommation.Month == mois.Month).OrderBy(c => c.DateConsommation).ToList();
            // var consommations = db.Consommation.Where(c => c.DateConsommation.Month == mois.Month).OrderBy(c => c.DateConsommation).ToList();

            if (consommations.Count == 0)
            {
                TempData["Error"] = "Données indisponibles.";
                return RedirectToAction("Courbes", "Compteurs");
            }

            var month = Convert.ToInt32(mois.Month);
            var day = consommations.First().DateConsommation; // 1
            var lastDay = consommations.Last().IdConsommation;

            foreach (var conso in consommations)
            {
                // Si c'est l'Hiver
                if ((month != 11 && month != 12) && (month < 1 || month > 3)) continue;
                // Si c'est la HP : 17 - 22 = 7400,2
                Consommation consommationHp;
                Consommation consommationHc;
                Consommation consommationHpl;

                Consommation consommationHpR;
                Consommation consommationHcR;
                Consommation consommationHplR;

                Consommation consommationHpMin;
                Consommation consommationHcMin;
                Consommation consommationHplMin;

                Consommation consommationHpRMin;
                Consommation consommationHcRMin;
                Consommation consommationHplRMin;

                if (conso.DateConsommation.Day == day.Day)
                {
                    day = conso.DateConsommation;

                    // HP
                    if (conso.DateConsommation.Hour >= 17 && conso.DateConsommation.Hour < 22)
                    {
                        hp.Add(conso);
                        // Enregistrement final
                        if (lastDay == conso.IdConsommation)
                        {
                            // Puissance Active
                            consommationsHp.Add(conso);
                            consommationsHp = consommationsHp.OrderByDescending(p => p.PuissanceActive).ToList();

                            consommationHp = consommationsHp.FirstOrDefault();
                            consommationHc = consommationsHc.FirstOrDefault();
                            consommationHpl = consommationsHpl.FirstOrDefault();

                            allConsommations.Add(consommationHp);
                            allConsommations.Add(consommationHc);
                            allConsommations.Add(consommationHpl);

                            // Puissance Réactive
                            consommationsHpR.Add(conso);
                            consommationsHpR = consommationsHpR.OrderByDescending(p => p.PuissanceReactive).ToList();

                            consommationHpR = consommationsHpR.FirstOrDefault();
                            consommationHcR = consommationsHcR.FirstOrDefault();
                            consommationHplR = consommationsHplR.FirstOrDefault();

                            allConsommationsR.Add(consommationHpR);
                            allConsommationsR.Add(consommationHcR);
                            allConsommationsR.Add(consommationHplR);

                            // Puissance Active Min
                            consommationsHpMin.Add(conso);
                            consommationsHpMin = consommationsHpMin.OrderBy(p => p.PuissanceActive).ToList();

                            consommationHpMin = consommationsHpMin.FirstOrDefault();
                            consommationHcMin = consommationsHcMin.FirstOrDefault();
                            consommationHplMin = consommationsHplMin.FirstOrDefault();

                            allConsommationsMin.Add(consommationHpMin);
                            allConsommationsMin.Add(consommationHcMin);
                            allConsommationsMin.Add(consommationHplMin);

                            // Puissance Réactive Min
                            consommationsHpRMin.Add(conso);
                            consommationsHpRMin = consommationsHpRMin.OrderBy(p => p.PuissanceReactive).ToList();

                            consommationHpRMin = consommationsHpRMin.FirstOrDefault();
                            consommationHcRMin = consommationsHcRMin.FirstOrDefault();
                            consommationHplRMin = consommationsHplRMin.FirstOrDefault();

                            allConsommationsRMin.Add(consommationHpRMin);
                            allConsommationsRMin.Add(consommationHcRMin);
                            allConsommationsRMin.Add(consommationHplRMin);
                            break;
                        }
                        // Au cours du même jour
                        consommationsHp.Add(conso);
                        consommationsHpR.Add(conso);

                        consommationsHpMin.Add(conso);
                        consommationsHpRMin.Add(conso);
                        // consommationsHp = consommationsHp.OrderByDescending(p => p.PuissanceActive).ToList();
                    }

                    // HC
                    else if (conso.DateConsommation.Hour >= 22 || conso.DateConsommation.Hour < 7)
                    {
                        hc.Add(conso);
                        // Enregistrement final
                        if (lastDay == conso.IdConsommation)
                        {
                            // Puissance Active Max
                            consommationsHc.Add(conso);
                            consommationsHc = consommationsHc.OrderByDescending(p => p.PuissanceActive).ToList();

                            consommationHc = consommationsHc.FirstOrDefault();
                            consommationHp = consommationsHp.FirstOrDefault();
                            consommationHpl = consommationsHpl.FirstOrDefault();

                            allConsommations.Add(consommationHp);
                            allConsommations.Add(consommationHc);
                            allConsommations.Add(consommationHpl);

                            // Puissance Réactive Max
                            consommationsHcR.Add(conso);
                            consommationsHcR = consommationsHcR.OrderByDescending(p => p.PuissanceReactive).ToList();

                            consommationHpR = consommationsHpR.FirstOrDefault();
                            consommationHcR = consommationsHcR.FirstOrDefault();
                            consommationHplR = consommationsHplR.FirstOrDefault();

                            allConsommationsR.Add(consommationHpR);
                            allConsommationsR.Add(consommationHcR);
                            allConsommationsR.Add(consommationHplR);

                            // Puissance Active Min
                            consommationsHcMin.Add(conso);
                            consommationsHcMin = consommationsHcMin.OrderBy(p => p.PuissanceActive).ToList();

                            consommationHcMin = consommationsHcMin.FirstOrDefault();
                            consommationHpMin = consommationsHpMin.FirstOrDefault();
                            consommationHplMin = consommationsHplMin.FirstOrDefault();

                            allConsommationsMin.Add(consommationHpMin);
                            allConsommationsMin.Add(consommationHcMin);
                            allConsommationsMin.Add(consommationHplMin);

                            // Puissance Réactive Min
                            consommationsHcRMin.Add(conso);
                            consommationsHcRMin = consommationsHcRMin.OrderBy(p => p.PuissanceReactive).ToList();

                            consommationHpRMin = consommationsHpRMin.FirstOrDefault();
                            consommationHcRMin = consommationsHcRMin.FirstOrDefault();
                            consommationHplRMin = consommationsHplRMin.FirstOrDefault();

                            allConsommationsRMin.Add(consommationHpRMin);
                            allConsommationsRMin.Add(consommationHcRMin);
                            allConsommationsRMin.Add(consommationHplRMin);
                            break;
                        }
                        // Au cours du même jour
                        consommationsHc.Add(conso);
                        consommationsHcR.Add(conso);

                        consommationsHcMin.Add(conso);
                        consommationsHcRMin.Add(conso);
                        // consommationsHc = consommationsHc.OrderByDescending(p => p.PuissanceActive).ToList();
                    }

                    else /*if (conso.DateConsommation.Hour >= 7 && conso.DateConsommation.Hour < 17)*/
                    {
                        hpl.Add(conso);
                        // Enregistrement final
                        if (lastDay == conso.IdConsommation)
                        {
                            // Puissance Active Max
                            consommationsHpl.Add(conso);
                            consommationsHpl = consommationsHpl.OrderByDescending(p => p.PuissanceActive).ToList();

                            consommationHp = consommationsHp.FirstOrDefault();
                            consommationHc = consommationsHc.FirstOrDefault();
                            consommationHpl = consommationsHpl.FirstOrDefault();

                            allConsommations.Add(consommationHp);
                            allConsommations.Add(consommationHc);
                            allConsommations.Add(consommationHpl);

                            // Puissance Réactive Max
                            consommationsHplR.Add(conso);
                            consommationsHplR = consommationsHplR.OrderByDescending(p => p.PuissanceReactive).ToList();

                            consommationHpR = consommationsHpR.FirstOrDefault();
                            consommationHcR = consommationsHcR.FirstOrDefault();
                            consommationHplR = consommationsHplR.FirstOrDefault();

                            allConsommationsR.Add(consommationHpR);
                            allConsommationsR.Add(consommationHcR);
                            allConsommationsR.Add(consommationHplR);

                            // Puissance Active Min
                            consommationsHplMin.Add(conso);
                            consommationsHplMin = consommationsHplMin.OrderBy(p => p.PuissanceActive).ToList();

                            consommationHplMin = consommationsHplMin.FirstOrDefault();
                            consommationHcMin = consommationsHcMin.FirstOrDefault();
                            consommationHpMin = consommationsHplMin.FirstOrDefault();

                            allConsommationsMin.Add(consommationHpMin);
                            allConsommationsMin.Add(consommationHcMin);
                            allConsommationsMin.Add(consommationHplMin);

                            // Puissance Réactive Min
                            consommationsHplRMin.Add(conso);
                            consommationsHplRMin = consommationsHplRMin.OrderBy(p => p.PuissanceReactive).ToList();

                            consommationHpRMin = consommationsHpRMin.FirstOrDefault();
                            consommationHcRMin = consommationsHcRMin.FirstOrDefault();
                            consommationHplRMin = consommationsHplRMin.FirstOrDefault();

                            allConsommationsRMin.Add(consommationHpRMin);
                            allConsommationsRMin.Add(consommationHcRMin);
                            allConsommationsRMin.Add(consommationHplRMin);
                            break;
                        }
                        // Au cours du même jour
                        consommationsHpl.Add(conso);
                        consommationsHplR.Add(conso);

                        consommationsHplMin.Add(conso);
                        consommationsHplRMin.Add(conso);
                        // consommationsHpl = consommationsHpl.OrderByDescending(p => p.PuissanceActive).ToList();
                    }
                        
                }
                else
                {
                    // Nouveau jour
                    day = conso.DateConsommation;

                    // Puissance Active Max
                    consommationsHp = consommationsHp.OrderByDescending(p => p.PuissanceActive).ToList();
                    consommationsHc = consommationsHc.OrderByDescending(p => p.PuissanceActive).ToList();
                    consommationsHpl = consommationsHpl.OrderByDescending(p => p.PuissanceActive).ToList();

                    consommationHp = consommationsHp.FirstOrDefault();
                    consommationHc = consommationsHc.FirstOrDefault();
                    consommationHpl = consommationsHpl.FirstOrDefault();

                    allConsommations.Add(consommationHp);
                    allConsommations.Add(consommationHc);
                    allConsommations.Add(consommationHpl);

                    consommationsHp.Clear();
                    consommationsHc.Clear();
                    consommationsHpl.Clear();

                    // Puissance Réactive Max
                    consommationsHpR = consommationsHpR.OrderByDescending(p => p.PuissanceReactive).ToList();
                    consommationsHcR = consommationsHcR.OrderByDescending(p => p.PuissanceReactive).ToList();
                    consommationsHplR = consommationsHplR.OrderByDescending(p => p.PuissanceReactive).ToList();

                    consommationHpR = consommationsHpR.FirstOrDefault();
                    consommationHcR = consommationsHcR.FirstOrDefault();
                    consommationHplR = consommationsHplR.FirstOrDefault();

                    allConsommationsR.Add(consommationHpR);
                    allConsommationsR.Add(consommationHcR);
                    allConsommationsR.Add(consommationHplR);

                    consommationsHpR.Clear();
                    consommationsHcR.Clear();
                    consommationsHplR.Clear();

                    // Puissance Active Min
                    consommationsHpMin = consommationsHpMin.OrderBy(p => p.PuissanceActive).ToList();
                    consommationsHcMin = consommationsHcMin.OrderBy(p => p.PuissanceActive).ToList();
                    consommationsHplMin = consommationsHplMin.OrderBy(p => p.PuissanceActive).ToList();

                    consommationHpMin = consommationsHpMin.FirstOrDefault();
                    consommationHcMin = consommationsHcMin.FirstOrDefault();
                    consommationHplMin = consommationsHplMin.FirstOrDefault();

                    allConsommationsMin.Add(consommationHpMin);
                    allConsommationsMin.Add(consommationHcMin);
                    allConsommationsMin.Add(consommationHplMin);

                    consommationsHpMin.Clear();
                    consommationsHcMin.Clear();
                    consommationsHplMin.Clear();

                    // Puissance Réactive Min
                    consommationsHpRMin = consommationsHpRMin.OrderBy(p => p.PuissanceReactive).ToList();
                    consommationsHcRMin = consommationsHcRMin.OrderBy(p => p.PuissanceReactive).ToList();
                    consommationsHplRMin = consommationsHplRMin.OrderBy(p => p.PuissanceReactive).ToList();

                    consommationHpRMin = consommationsHpRMin.FirstOrDefault();
                    consommationHcRMin = consommationsHcRMin.FirstOrDefault();
                    consommationHplRMin = consommationsHplRMin.FirstOrDefault();

                    allConsommationsRMin.Add(consommationHpRMin);
                    allConsommationsRMin.Add(consommationHcRMin);
                    allConsommationsRMin.Add(consommationHplRMin);

                    consommationsHpRMin.Clear();
                    consommationsHcRMin.Clear();
                    consommationsHplRMin.Clear();

                    if (conso.DateConsommation.Hour >= 17 && conso.DateConsommation.Hour < 22)
                    {
                        hp.Add(conso);

                        // Puissance Active Max
                        consommationsHp.Add(conso);
                        consommationsHp = consommationsHp.OrderByDescending(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Max
                        consommationsHpR.Add(conso);
                        consommationsHpR = consommationsHpR.OrderByDescending(p => p.PuissanceReactive).ToList();

                        // Puissance Active Min
                        consommationsHpMin.Add(conso);
                        consommationsHpMin = consommationsHpMin.OrderBy(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Min
                        consommationsHpRMin.Add(conso);
                        consommationsHpRMin = consommationsHpRMin.OrderBy(p => p.PuissanceReactive).ToList();
                    }

                    else if (conso.DateConsommation.Hour >= 22 || conso.DateConsommation.Hour < 7)
                    {
                        hc.Add(conso);

                        // Puissance Active Max
                        consommationsHc.Add(conso);
                        consommationsHc = consommationsHc.OrderByDescending(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Max
                        consommationsHcR.Add(conso);
                        consommationsHcR = consommationsHcR.OrderByDescending(p => p.PuissanceReactive).ToList();

                        // Puissance Active Min
                        consommationsHcMin.Add(conso);
                        consommationsHcMin = consommationsHcMin.OrderBy(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Min
                        consommationsHcRMin.Add(conso);
                        consommationsHcRMin = consommationsHcRMin.OrderBy(p => p.PuissanceReactive).ToList();
                    }

                    else /*if (conso.DateConsommation.Hour >= 7 && conso.DateConsommation.Hour < 17)*/
                    {
                        hpl.Add(conso);

                        // Puissance Active Max
                        consommationsHpl.Add(conso);
                        consommationsHpl = consommationsHpl.OrderByDescending(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Max
                        consommationsHplR.Add(conso);
                        consommationsHplR = consommationsHplR.OrderByDescending(p => p.PuissanceReactive).ToList();

                        // Puissance Active Min
                        consommationsHplMin.Add(conso);
                        consommationsHplMin = consommationsHplMin.OrderBy(p => p.PuissanceActive).ToList();

                        // Puissance Réactive Min
                        consommationsHplRMin.Add(conso);
                        consommationsHplRMin = consommationsHplRMin.OrderBy(p => p.PuissanceReactive).ToList();
                    }
                }
            }
            consommationsHp.Clear();
            consommationsHc.Clear();
            consommationsHpl.Clear();
            consommations.Clear();

            ViewBag.MinPAs = allConsommationsMin;
            ViewBag.MaxPRs = allConsommationsR;
            ViewBag.MinPRs = allConsommationsRMin;

            ViewBag.Date = mois.ToString("dddd dd MMM yyyy");

            // Puissance Active Max
            ViewBag.MaxPAHP = hp.OrderByDescending(p => p.PuissanceActive).FirstOrDefault();
            ViewBag.MaxPAHC = hc.OrderByDescending(p => p.PuissanceActive).FirstOrDefault();
            ViewBag.MaxPAHPL = hpl.OrderByDescending(p => p.PuissanceActive).FirstOrDefault();

            // Puissance Active Min
            ViewBag.MinPAHP = hp.OrderBy(p => p.PuissanceActive).FirstOrDefault();
            ViewBag.MinPAHC = hc.OrderBy(p => p.PuissanceActive).FirstOrDefault();
            ViewBag.MinPAHPL = hpl.OrderBy(p => p.PuissanceActive).FirstOrDefault();

            // Puissance Réactive Max
            ViewBag.MaxPRHP = hp.OrderByDescending(p => p.PuissanceReactive).FirstOrDefault();
            ViewBag.MaxPRHC = hc.OrderByDescending(p => p.PuissanceReactive).FirstOrDefault();
            ViewBag.MaxPRHPL = hpl.OrderByDescending(p => p.PuissanceReactive).FirstOrDefault();

            // Puissance Réactive Min
            ViewBag.MinPRHP = hp.OrderBy(p => p.PuissanceReactive).FirstOrDefault();
            ViewBag.MinPRHC = hc.OrderBy(p => p.PuissanceReactive).FirstOrDefault();
            ViewBag.MinPRHPL = hpl.OrderBy(p => p.PuissanceReactive).FirstOrDefault();

            var PA = allConsommations.FirstOrDefault();

            var Compteur = db.Compteur.Where(c => c.IdCompteur == PA.IdCompteur).ToList();
            var IdCompteur = Compteur.FirstOrDefault().IdCompteur.ToString();

            var Installation = db.Installation.Where(i => i.IdCompteur == IdCompteur).ToList();
            var InstallationIdContrat = Installation.FirstOrDefault().IdContrat;

            var Contrat = db.Contrat.Where(c => c.IdContrat == InstallationIdContrat).ToList();
            var ContratClient = Contrat.FirstOrDefault().IdClient;

            var Client = db.Client.Where(c => c.IdClient == ContratClient).FirstOrDefault();

            var ContratSingle = Contrat.FirstOrDefault();
            var InstallationSingle = Installation.FirstOrDefault();
            var CompteurSingle = Compteur.FirstOrDefault();

            var DateContrat = ContratSingle.DateContrat.ToString("dddd dd MMM yyyy");
            var RefContrat = ContratSingle.ReferenceContrat;
            var DateAmenag = InstallationSingle.DateAmenagement.ToString("dddd dd MMM yyyy"); ;
            var Localite = InstallationSingle.Adresse;
            var Marque = CompteurSingle.Marque;
            var Serie = CompteurSingle.Serie;

            IDictionary<string, string> ClientInfo = new Dictionary<string, string>()
            {
                { "Date du Contrat", DateContrat },
                { "Reference Contrat", RefContrat },
                { "Date Amenag", DateAmenag },
                { "Localite", Localite },
                { "Marque", Marque },
                { "Serie", Serie }
            };

            ViewBag.ClientInfo = ClientInfo;
            ViewBag.Client = Client;

            ViewBag.IdCompteur = IdCompteur;

            return View(allConsommations);
        }

        [Authorize]
        public ActionResult CourbeAnnuelle(string id, int annee)
        {
            if (string.IsNullOrEmpty(id) || string.IsNullOrWhiteSpace(id))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            if (string.IsNullOrEmpty(annee.ToString()) || string.IsNullOrWhiteSpace(annee.ToString()))
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            Regex regex = new Regex(@"\d{4}");
            Match match = regex.Match(annee.ToString());

            if (!match.Success)
            {
                return RedirectToAction("Courbes", "Compteurs");
            }

            var Consommations = db.Consommation.Where(c => c.IdCompteur == id && c.DateConsommation.Year == annee).OrderBy(c => c.DateConsommation).ToList();

            if (Consommations.Count == 0)
            {
                TempData["Error"] = "Données indisponibles.";
                return RedirectToAction("Courbes", "Compteurs");
            }

            var Cmonths = Consommations.Select(c => c.DateConsommation.Month).Distinct().ToList();
            ViewBag.Year = annee;
            ViewBag.Month = Cmonths;

            var monthConsommations = new List<Consommation>();

            var maxYearPAs = new List<Consommation>();
            var maxYearPRs = new List<Consommation>();
            var minYearPAs = new List<Consommation>();
            var minYearPRs = new List<Consommation>();

            var allHp = new List<Consommation>();
            var allHc = new List<Consommation>();
            var allHpl = new List<Consommation>();

            var HP = new Consommation();
            var HC = new Consommation();
            var HPL = new Consommation();

            foreach (var cmonth in Cmonths)
            {
                monthConsommations = Consommations.Where(c => c.DateConsommation.Month == cmonth).OrderBy(c => c.DateConsommation).ToList();
                var actMonth = monthConsommations.FirstOrDefault().DateConsommation.Month;

                // Hiver
                if (actMonth == 11 || actMonth == 12 || actMonth == 1 || actMonth == 2 || actMonth == 3)
                {
                    foreach (var conso in monthConsommations)
                    {
                        var hour = conso.DateConsommation.Hour;

                        if (hour >= 17 && hour < 22)
                        {
                            allHp.Add(conso);
                        } else if (hour >= 22 || hour < 7)
                        {
                            allHc.Add(conso);
                        }
                        else
                        {
                            allHpl.Add(conso);
                        }
                    }
                } else
                {
                    foreach (var conso in monthConsommations)
                    {
                        var hour = conso.DateConsommation.Hour;
                        if (hour >= 18 && hour < 23)
                        {
                            allHp.Add(conso);
                        }
                        else if (hour >= 23 || hour < 8)
                        {
                            allHc.Add(conso);
                        }
                        else
                        {
                            allHpl.Add(conso);
                        }
                    }
                }

                // Take the max values
                HP = allHp.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();
                HC = allHc.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();
                HPL = allHpl.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();

                // Store max values
                maxYearPAs.Add(HP);
                maxYearPAs.Add(HC);
                maxYearPAs.Add(HPL);

                // Take the min values
                HP = allHp.OrderBy(c => c.PuissanceActive).FirstOrDefault();
                HC = allHc.OrderBy(c => c.PuissanceActive).FirstOrDefault();
                HPL = allHpl.OrderBy(c => c.PuissanceActive).FirstOrDefault();

                // Add min values
                minYearPAs.Add(HP); 
                minYearPAs.Add(HC);  
                minYearPAs.Add(HPL);

                // Puissance Réactive

                // Take the max values
                HP = allHp.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();
                HC = allHc.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();
                HPL = allHpl.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();

                // Add max values
                maxYearPRs.Add(HP);
                maxYearPRs.Add(HC);
                maxYearPRs.Add(HPL);

                // Take the min values
                HP = allHp.OrderBy(c => c.PuissanceReactive).FirstOrDefault();
                HC = allHc.OrderBy(c => c.PuissanceReactive).FirstOrDefault();
                HPL = allHpl.OrderBy(c => c.PuissanceReactive).FirstOrDefault();

                // Add min values
                minYearPRs.Add(HP); 
                minYearPRs.Add(HC);  
                minYearPRs.Add(HPL);
            }

            //// Min PAs
            //minMonthPAs.AddRange(monthConsommations.OrderBy(c => c.PuissanceActive).Take(3).ToList());

            //// Min PRs
            //minMonthPRs.AddRange(monthConsommations.OrderBy(c => c.PuissanceReactive).Take(3).ToList());

            maxYearPAs = maxYearPAs.OrderBy(c => c.DateConsommation).ToList();
            maxYearPRs = maxYearPRs.OrderBy(c => c.DateConsommation).ToList();
            minYearPAs = minYearPAs.OrderBy(c => c.DateConsommation).ToList();
            minYearPRs = minYearPRs.OrderBy(c => c.DateConsommation).ToList();

            ViewBag.maxYearPAs = maxYearPAs;
            ViewBag.maxYearPRs = maxYearPRs;
            ViewBag.minYearPAs = minYearPAs;
            ViewBag.minYearPRs = minYearPRs;

            ViewBag.paMaxLast = maxYearPAs.Last().IdConsommation;
            ViewBag.paMinLast = minYearPAs.Last().IdConsommation;
            ViewBag.prMaxLast = maxYearPRs.Last().IdConsommation;
            ViewBag.prMinLast = minYearPRs.Last().IdConsommation;

            // Top PA
            var TopHPPA = allHp.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();
            var TopHCPA = allHc.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();
            var TopHPLPA = allHpl.OrderByDescending(c => c.PuissanceActive).FirstOrDefault();

            // Min PA
            var MinHPPA = allHp.OrderBy(c => c.PuissanceActive).FirstOrDefault();
            var MinHCPA = allHc.OrderBy(c => c.PuissanceActive).FirstOrDefault();
            var MinHPLPA = allHpl.OrderBy(c => c.PuissanceActive).FirstOrDefault();

            // Top PR
            var TopHPPR = allHp.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();
            var TopHCPR = allHc.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();
            var TopHPLPR = allHpl.OrderByDescending(c => c.PuissanceReactive).FirstOrDefault();

            // Min PR
            var MinHPPR = allHp.OrderBy(c => c.PuissanceReactive).FirstOrDefault();
            var MinHCPR = allHc.OrderBy(c => c.PuissanceReactive).FirstOrDefault();
            var MinHPLPR = allHpl.OrderBy(c => c.PuissanceReactive).FirstOrDefault();

            ViewBag.TopHPPA = TopHPPA;
            ViewBag.TopHCPA = TopHCPA;;
            ViewBag.TopHPLPA = TopHPLPA;
            ViewBag.MinHPPA = MinHPPA;
            ViewBag.MinHCPA = MinHCPA;
            ViewBag.MinHPLPA = MinHPLPA;
            ViewBag.TopHPPR = TopHPPR;
            ViewBag.TopHCPR = TopHCPR;
            ViewBag.TopHPLPR = TopHPLPR;
            ViewBag.MinHPPR = MinHPPR;
            ViewBag.MinHCPR = MinHCPR;
            ViewBag.MinHPLPR = MinHPLPR;

            var PA = maxYearPAs.FirstOrDefault();

            var Compteur = db.Compteur.Where(c => c.IdCompteur == PA.IdCompteur).ToList();
            var IdCompteur = Compteur.FirstOrDefault().IdCompteur.ToString();

            var Installation = db.Installation.Where(i => i.IdCompteur == IdCompteur).ToList();
            var InstallationIdContrat = Installation.FirstOrDefault().IdContrat;

            var Contrat = db.Contrat.Where(c => c.IdContrat == InstallationIdContrat).ToList();
            var ContratClient = Contrat.FirstOrDefault().IdClient;

            var Client = db.Client.Where(c => c.IdClient == ContratClient).FirstOrDefault();

            var ContratSingle = Contrat.FirstOrDefault();
            var InstallationSingle = Installation.FirstOrDefault();
            var CompteurSingle = Compteur.FirstOrDefault();

            var DateContrat = ContratSingle.DateContrat.ToString("dddd dd MMM yyyy");
            var RefContrat = ContratSingle.ReferenceContrat;
            var DateAmenag = InstallationSingle.DateAmenagement.ToString("dddd dd MMM yyyy"); ;
            var Localite = InstallationSingle.Adresse;
            var Marque = CompteurSingle.Marque;
            var Serie = CompteurSingle.Serie;

            IDictionary<string, string> ClientInfo = new Dictionary<string, string>()
            {
                { "Date du Contrat", DateContrat },
                { "Reference Contrat", RefContrat },
                { "Date Amenag", DateAmenag },
                { "Localite", Localite },
                { "Marque", Marque },
                { "Serie", Serie }
            };

            ViewBag.ClientInfo = ClientInfo;
            ViewBag.Client = Client;

            ViewBag.IdCompteur = IdCompteur;

            // Clear
            allHp.Clear();
            allHc.Clear();
            allHpl.Clear();

            return View();
        }
    }
}
