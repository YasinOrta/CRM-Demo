using System.ComponentModel.DataAnnotations;

namespace CRM_API.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        public string Description { get; set; } = "";

        public string Status { get; set; } = "";

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public int CompletionRate { get; set; }

        public string AssignedTo { get; set; } = "";

        public string Priority { get; set; } = "";
    }
}
