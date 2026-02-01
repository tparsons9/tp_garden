---
up: "[[Information Partitions and Knowledge]]"
aliases:
  - p-believes
  - q-belief
  - q-believes
tags:
  - concept/definition
  - bayes/learning
  - micro/information
mathLink-blocks:
  ml-def-p-belief: "$B^p_i(A) = \\{\\omega : P(A \\mid \\Pi_i(\\omega)) \\geq p\\}$"
  ml-def-q-belief: $B_{it}^{q}(F)= \{ \omega \in\Omega\mid  P(F\mid  h_{it}(\omega))\geq q \}$
---
> [!definition] Definition (p-Belief).
> For any $p \in [0,1]$, say that agent $i$ **p-believes** $A$ at $\omega$ if:
>
>$$P(A \mid \Pi_i(\omega)) \geq p$$
>
>The set of states at which agent $i$ p-believes $A$ is:
>
>$$
>B^p_i(A) = \{\omega : P(A \mid \Pi_i(\omega)) \geq p\}
>$$

^ml-def-p-belief

## Discussion

$p$-belief relaxes the certainty requirement of the [[Knowledge Operator]]. While knowledge requires **all** states in an agent's information cell belong to event $A$, $p$-belief only requires that a proportion $p$ of the cell belongs to $A$ (by probability).

- **p = 1**: Requires certainty (but may differ from knowledge - see philosophical note below)
- **p** < 1: Allows for some uncertainty while maintaining strong belief
- **p = 0**: Trivial case - everyone p-believes everything

Essentially, it is a measure of an agent's posterior certainty that an event is true, based on a probability threshold $p$. This definition relies on teh agent's posterior probability of event $A$, $P(A\mid \Pi_{i}(\omega))$, which is calculated using Bayes' rule conditional on their information partition element $\Pi_{i}(\omega)$ that contains the state $\omega$. 

See [[Common p-Belief]] to formalize *almost common knowledge* for the case of the group of agents, rather than the individual case presented here.

>[!warning]- Knowledge vs p-Belief
>Suppose $\Omega = \{1,2,3\}$ with prior $P = (0, 1/2, 1/2)$ and agent partition $\{\{1,2\}, \{3\}\}$.
>
>At state $\omega = 2$:
>- Agent **knows** $\{2,3\}$ according to Definition 1.1? **No** (since $1 \in \{1,2\}$ but $1 \notin \{2,3\}$)
>- Agent **1-believes** $\{2,3\}$? **Yes** (since $P(\{2,3\} \mid \{1,2\}) = 1$)
>
>Whether knowledge and p-belief represent distinct modes of understanding is an interesting philosophical question.

>[!remark]
>At $p=1$, (or $q=1$) the concept is closely related to knowledge, and specifies that an agent has absolute certainty about the event. 

### Extensions

#### Evident Events 

> [!definition] Definition (Evident p-Belief).
> For any $p \in [0,1]$, the event $A \subseteq \Omega$ is **evident p-belief** if:
>$$
>A \subseteq \bigcap_{i \in \mathcal{I}} B^p_i(A)
>$$

see also [[Evident Event]]. 

#### Dynamics 

Under [[Bayesian Learning]], with state  in state space $\Omega=\Theta \times \mathcal{X}^{\infty}$ (the parameter space and infinite sequence of signal profiles), this notion of $p$-belief is extended to measure an individuals **subjective confidence** in event $A$ given probability threshold $q$ (note that we refer to the concept as a $q$-belief under this context). 

Formally,
- Assume [[Identifiability Assumption]] holds
- Let $P_{\theta}$ denote the measure on the $\mathcal{X}^{\infty}$ profiles, conditional on $\theta$
- Assume $\Theta$ finite
- Suppose $i=1,2$ such that $\mathcal{X}=\mathcal{X}^{1}\times \mathcal{X}^{2}$ where $\mathcal{X}^{i}$ denotes the set of agent $i$'s signal realizations
- $h_{it}(\omega)=(x_{1}^{i}(\omega),\dots,x_{t}^{i}(\omega))$ denote the history for agent $i$ at $t$ time when $\omega$ the realized state; $\mathcal{H}_{it}$ to denote the filtration induced by the agent $i$'s histories.
- Each agent privately observes their own signal for each period.


> [!definition] Definition (q-belief).
> For any $q \in[0,1]$ and measurable event $F$, agent $i$ $q$-believes in $F$ at time $t$ on
>
> $$
> B_{it}^{q}(F)= \{ \omega \in\Omega\mid  P(F\mid  h_{it}(\omega))\geq q \} 
>$$

^ml-def-q-belief

It essentially extends the generalized probabilistic certainty of $p$-belief to dynamics (learning) or higher-order beliefs (common $q$-belief), where $q$ serves the same role as the probability threshold $p$. 