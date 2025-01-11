import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Team() {
  const team = [
    {
      name: "John Smith",
      role: "Designation here",
      image: "/image-X01bHttDSp476DTUcT6r6eVbfMxGLv.avif?height=96&width=96",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
      name: "Sarah Johnson",
      role: "Designation here",
      image: "/image-LWPHRJGbBbLMej8YgQFAIttP71ZZQR.avif?height=96&width=96",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu.",
    },
    {
      name: "Michael Brown",
      role: "Designation here",
      image: "/image-0Ob11knuFbPE0lqDb2ZcTEVqOGtGz2.avif?height=96&width=96",
      description:
        "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
  ];

  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>Team</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {team.map((member) => (
            <Card key={member.name} className="bg-blue-50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="text-center md:w-48">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-lg mx-auto mb-2"
                    />
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                  <p className="flex-1 text-gray-600">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
