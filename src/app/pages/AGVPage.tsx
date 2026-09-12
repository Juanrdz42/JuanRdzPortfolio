import { Fragment } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Calendar } from "lucide-react";
import { BackButton, MetricCard, SectionLabel, TechChip } from "../components/shared/PortfolioUI";
import { ProjectMedia } from "../components/shared/ProjectMedia";
import { agvProject, agvHeroMedia, warehouseLayoutMedia, projectMedia, missionSteps, primaryResults, supportingResults, tradeoffs, futureImprovements } from "../data/agv";

export function AGVPage({ onBack }: { onBack: () => void }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22 }} className="mx-auto max-w-[960px] px-6 py-8 sm:px-12 sm:py-11">
      <BackButton onClick={onBack} />
      <header className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-[#F4F7FB] sm:text-[42px]">{agvProject.name}</h1>
        <p className="mt-1 text-base text-[#9EB1C4]">{agvProject.tagline}</p>
        <p className="mt-3 font-mono text-xs text-[var(--xcode-orange-soft)]">{agvProject.nameExplanation}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {agvProject.period && <span className="mr-2 inline-flex items-center gap-1.5 font-mono text-xs text-[#9EB1C4]"><Calendar size={12} />{agvProject.period}</span>}
          {agvProject.tech.map((tech) => <TechChip key={tech} label={tech} />)}
        </div>
      </header>
      <div className="space-y-9 pb-12">
        <section>
          <SectionLabel>Overview</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">{agvProject.overview}</p>
        </section>
        <ProjectMedia media={agvHeroMedia} />
        <section>
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">As the number of AGVs and missions grows, centralized assignment can become a bottleneck. A simple “closest AGV wins” strategy can also overload certain vehicles while ignoring congestion or battery state. We wanted to test whether vehicles could make those decisions together, using more of the information available to each agent.</p>
          <p className="mt-4 text-sm leading-relaxed text-[#9EB1C4]">{agvProject.contribution}</p>
          <div className="mt-5"><ProjectMedia media={warehouseLayoutMedia} /></div>
        </section>
        <section>
          <SectionLabel>Our Approach</SectionLabel>
          <ol className="grid gap-3 sm:grid-cols-2">
            {missionSteps.map(([title, detail], index) => (
              <li key={title} className="glass-inset flex gap-4 rounded-xl p-4">
                <span className="font-mono text-xs text-[var(--xcode-orange-soft)]">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="text-sm font-semibold text-[#E7F0F8]">{title}</h3><p className="mt-1 text-xs leading-relaxed text-[#9EB1C4]">{detail}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm leading-relaxed text-[#9EB1C4]">The Mission Manager is a passive repository for missions and bids. It does not select a winner: the AGVs determine the best bid, and the winning AGV assigns the mission to itself.</p>
        </section>
        <section>
          <SectionLabel>Distributed Decision Making</SectionLabel>
          <p className="mb-4 text-sm leading-relaxed text-[#9EB1C4]">Each available AGV computes its own utility for a mission, weighing proximity and battery against accumulated work and expected congestion.</p>
          <div className="glass-inset rounded-xl p-5">
            <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-7 text-[#D7E4F0] sm:text-sm">U(i,m) = -wd * D(i,m) + wb * B_i - wl * L_i - wc * C_i</pre>
            <dl className="mt-4 grid gap-3 border-t border-[#6AA3D8]/20 pt-4 text-xs sm:grid-cols-2">
              {[["D", "Distance to mission origin"], ["B", "Battery level"], ["L", "Accumulated workload"], ["C", "Estimated congestion"]].map(([key, value]) => (
                <div key={key} className="flex gap-3"><dt className="font-mono text-[var(--xcode-orange-soft)]">{key}</dt><dd className="text-[#9EB1C4]">{value}</dd></div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-[#9EB1C4]">The weights wd, wb, wl, and wc control each factor’s influence. A higher utility produces a stronger bid.</p>
          </div>
        </section>
        <section>
          <SectionLabel>Routing &amp; Autonomy</SectionLabel>
          <div className="grid gap-4 sm:grid-cols-2">
            {[{ title: "Baseline · BFS", items: ["Shortest-path routing", "No awareness of other AGVs"] }, { title: "Proposed · A*", items: ["Congestion-aware cost includes other active AGVs", "Can prefer less crowded paths", "Re-plans when blocked"] }].map(({ title, items }) => (
              <div key={title} className="glass-card rounded-xl p-5">
                <h3 className="mb-3 font-mono text-sm text-[#D7E4F0]">{title}</h3>
                <ul className="space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-[#9EB1C4]"><span aria-hidden="true" className="text-[#62B0F4]">›</span>{item}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="glass-inset mt-4 rounded-xl p-5">
            <h3 className="mb-2 text-sm font-semibold text-[#D7E4F0]">Charging before energy becomes a problem</h3>
            <p className="text-sm leading-relaxed text-[#9EB1C4]">AGVs track energy consumption and stop bidding when their battery is low. Charging decisions account for the actual route energy cost of reaching a charger. After charging, a vehicle can resume its previous mission state.</p>
          </div>
        </section>
        <section>
          <SectionLabel>Digital Twin</SectionLabel>
          <p className="mb-5 text-sm leading-relaxed text-[#9EB1C4]">Python and AgentPy run the simulation. Exported JSON state synchronizes the Unity digital twin, which visualizes AGV positions, battery levels, current states, active missions, pallets, station states, and pedestrians or other dynamic obstacles.</p>
          <div className="glass-inset rounded-2xl p-5">
            <ol className="mx-auto max-w-sm">
              {[["Python / AgentPy", "Agent decisions & simulation"], ["Simulation state / JSON", "Exported state data"], ["Unity Digital Twin", "3D visualization"]].map(([title, detail], index) => (
                <Fragment key={title}>
                  {index > 0 && <li aria-hidden="true" className="flex justify-center py-2 text-[#62B0F4]"><ArrowDown size={20} /></li>}
                  <li className="rounded-xl border border-[#0A84FF]/35 bg-[#0A84FF]/8 p-4 text-center"><h3 className="text-sm font-semibold text-[#E7F0F8]">{title}</h3><p className="mt-1 text-xs text-[#9EB1C4]">{detail}</p></li>
                </Fragment>
              ))}
            </ol>
          </div>
        </section>
        <section>
          <SectionLabel>Results</SectionLabel>
          <p className="mb-5 text-sm leading-relaxed text-[#9EB1C4]">We compared the baseline and proposed approaches across 15 random simulation seeds under the same conditions. These changes describe the tested simulation, rather than performance in an operating warehouse.</p>
          <div className="grid gap-3 sm:grid-cols-2">{primaryResults.map((result) => <MetricCard key={result.label} {...result} />)}</div>
          <p className="mt-4 text-sm leading-relaxed text-[#C4D6E8]">The 35.7% reduction in average charging time came from the proactive charging policy based on actual route energy cost—not from the auction heuristic or A* routing.</p>
          <dl className="my-5 grid gap-3 sm:grid-cols-3">{supportingResults.map((result) => (
            <div key={result.label} className="border-l border-[#6AA3D8]/30 pl-3"><dt className="text-xs text-[#9EB1C4]">{result.label}</dt><dd className="mt-1 font-mono text-sm text-[#D7E4F0]">{result.value}</dd></div>
          ))}</dl>
          <div className="glass-inset rounded-xl border border-[#FF9F0A]/25 p-5">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-[var(--xcode-orange-soft)]">Tradeoffs · What did not improve</h3>
            <dl className="grid gap-4 sm:grid-cols-3">{tradeoffs.map((result) => (
              <div key={result.label}><dt className="text-xs text-[#9EB1C4]">{result.label}</dt><dd className="mt-1 font-mono text-lg text-[#FFB340]">{result.value}</dd></div>
            ))}</dl>
            <p className="mt-4 text-sm leading-relaxed text-[#9EB1C4]">The proposed system improved responsiveness and fleet availability, but it did not improve every metric. Congestion-aware routing introduced slightly longer routes, and the workload-balancing term was not strong enough under the tested parameters.</p>
          </div>
        </section>
        <section>
          <SectionLabel>What I Learned</SectionLabel>
          <p className="text-sm leading-relaxed text-[#9EB1C4]">Better local decisions do not automatically produce better results for the whole fleet. Comparing against a baseline made that clear: some changes helped vehicles respond faster, but also increased travel and left work less evenly distributed. Seeing the simulation in Unity helped me connect the numbers to what the agents were actually doing.</p>
        </section>
        <section>
          <SectionLabel>Future Improvements</SectionLabel>
          <ul className="grid gap-3 sm:grid-cols-2">{futureImprovements.map((item) => <li key={item} className="glass-inset rounded-lg px-4 py-3 text-sm leading-relaxed text-[#9EB1C4]">{item}</li>)}</ul>
        </section>
        <section>
          <SectionLabel>Media Gallery</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2">{projectMedia.map((media) => <div key={media.caption} className={media.type === "video" ? "sm:col-span-2" : undefined}><ProjectMedia media={media} /></div>)}</div>
        </section>
      </div>
    </motion.div>
  );
}
