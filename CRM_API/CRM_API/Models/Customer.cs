using System.ComponentModel.DataAnnotations;

namespace CRM_API.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = "";

        public string Company { get; set; } = "";

        public string Email { get; set; } = "";

        public string Phone { get; set; } = "";

        public string Type { get; set; } = "";

        public string Position { get; set; } = "";

        public string Task { get; set; } = ""; 

    }
}
