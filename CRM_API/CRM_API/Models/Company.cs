using System.ComponentModel.DataAnnotations;

namespace CRM_API.Models
{
    public class Company
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = "";

        public string Address { get; set; } = "";

        public string RelatedTasks { get; set; } = "";

    }
}
