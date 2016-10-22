using System;
using Microsoft.Owin;
using Owin;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
using CourbesCharge.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Office.Interop.Excel;

[assembly: OwinStartupAttribute(typeof(CourbesCharge.Startup))]
namespace CourbesCharge
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
