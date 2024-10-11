import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Courses from "./tab-content/Courses";
import Events from "./tab-content/Events";
import RoadMap from "./tab-content/RoadMap";
import Scholarships from "./tab-content/Scholarships";
import Universities from "./tab-content/Universities";

export function SearchEngine() {
  return (
    <div className="flex flex-col items-center justify-center p-2 ">
      <div className="rounded-2xl p-5 lg:w-[70%] overflow-hidden">
        <Tabs defaultValue="courses" className="lg:min-w-[400px]">
          <TabsList className="grid grid-cols-5 items-center">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="roadmap">Road Map</TabsTrigger>
          </TabsList>
          <TabsContent value="courses">
            <Courses />
          </TabsContent>
          <TabsContent value="scholarships">
            <Scholarships />
          </TabsContent>
          <TabsContent value="universities">
            <Universities />
          </TabsContent>
          <TabsContent value="events">
            <Events />
          </TabsContent>
          <TabsContent value="roadmap">
            <RoadMap />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
