import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

const bayesianLearningNav = Component.ConditionalRender({
  component: Component.FolderNav({
    title: "Information Theory",
    folderPrefix: "bayesian-learning/",
    sections: [
      {
        title: "Foundations",
        entries: [
          "Information-Theory",
          "Properties-of-Information",
          "Shannon-Entropy",
          "Cross-Entropy",
          "Khinchin-(1957)-Axiomatization-of-Entropy",
        ],
      },
      {
        title: "KL-Divergence",
        entries: [
          "=-Kullback-Leibler-Divergence-for-Relative-Entropy",
          "Convexity-of-KL-Divergence",
        ],
      },
      {
        title: "Partitions & Knowledge",
        entries: [
          "Information-Partitions-and-Knowledge",
          "Knowledge-Operator",
          "Common-Knowledge",
          "Mutual-Knowledge",
          "p-belief",
          "Common-p-Belief",
          "Evident-Event",
          "Meet-of-Information-Partitions",
          "Aumann's-\"Agreeing-to-Disagree\"-(1976)",
          "Rubinstein-(1989)'s-Email-Game",
        ],
      },
      {
        title: "Information Structure",
        entries: [
          "Information-Structure",
          "Signal-Dispersion-and-Informativeness",
          "Blackwell-Order",
          "Garblings",
        ],
      },
      {
        title: "Bayesian Persuasion",
        entries: [
          "Bayesian-Persuasion",
          "Value-of-a-Signal-(Kamenica-Gentzkow)",
          "When-(Bayesian)-Persuasion-is-valuable",
        ],
      },
      {
        title: "Information Costs",
        entries: [
          "Information-Costs",
          "Prior-Dependent-Information-Costs",
          "Posterior-Separable-Cost-Function",
          "Prior-Independent-Information-Costs",
          "Axioms-for-Prior-independent-Information-Cost-(PST-2020)",
        ],
      },
      {
        title: "Bayesian Learning",
        entries: [
          "Sequential-Signal-Model",
          "Doob's-Consistency-Theorem",
        ],
      },
      {
        title: "Agreement",
        entries: [
          "Merging-of-Beliefs-(Blackwell-Dubins)",
          "Asymptotic-Agreement-of-Beliefs",
          "Expected-Disagreement-Reduction-from-Information",
        ],
      },
      {
        title: "Individual & Common Learning",
        entries: [
          "Individual-Learning",
          "Common-Learning",
          "Individual-Learning-implies-Common-Learning",
        ],
      },
      {
        title: "Misspecification",
        entries: [
          "Dogmatism-as-a-critique-of-Bayesian-Learning",
          "Model-Uncertainty-and-Misspecification-under-Bayesian-Learning",
          "Berk's-Consistency-Result",
          "Failure-of-Asymptotic-Agreement-in-Learning",
        ],
      },
      {
        title: "Berk-Nash Equilibrium",
        entries: [
          "Berk-Nash-Equilibrium",
          "Berk-Nash-Equilibrium---Single-Agent",
          "Berk-Nash-Equilibrium---Simultaneous-Games",
        ],
      },
    ],
  }),
  condition: (props) => (props.fileData.slug ?? "").startsWith("bayesian-learning/"),
})

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    bayesianLearningNav,
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [bayesianLearningNav],
}
