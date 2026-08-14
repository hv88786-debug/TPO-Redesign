import { placementKpis } from "@/constants/placements";
import { KpiCard } from "@/components/home/placements/kpi-card";

export function KpiGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {placementKpis.map((kpi, index) => (
        <KpiCard key={kpi.id} kpi={kpi} index={index} />
      ))}
    </div>
  );
}
