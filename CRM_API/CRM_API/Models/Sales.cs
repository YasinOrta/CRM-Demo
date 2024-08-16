using System.ComponentModel.DataAnnotations;

namespace CRM_API.Models
{
    public class Sales
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; } = "";

        public string Company { get; set; } = "";

        public string Status { get; set; } = "";

        public string Priority { get; set; } = "";

        public int EstimatedValue { get; set; }

        public User? AccountOwner { get; set; } = null;
    }
}
