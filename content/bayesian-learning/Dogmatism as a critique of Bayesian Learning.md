---
up: "[[Bayesian Learning]]"
aliases:
tags:
  - concept/result
  - bayes/learning
---
"Dogmatism" here means that an agent is _unwilling_ to abandon their model of the world, no matter how much evidence accumulates against it. Because the agent _knows_ (or assumes they know) the [[Signal-induced Belief Distribution|signal-generating distribution]] $(P_{\theta})_{\theta \in\Theta}$, any sequence of signals, no matter how strange, will be interpreted through the lens of that model.

Under standard [[Bayesian Learning]], the agent is assumed to be dogmatic about the [[Signal-induced Belief Distribution]]–they believe their model is correct and assign zero probability only to the parameter values that are truly impossible.

This dogmatism can lead to strange conclusions: If the agent observes a signal sequence that is _extremely unlikely_ under their model, they come increasingly confident that the true state is the one that makes the highly unlikely sequence most likely, rather than questioning their model of the world. The persistence of disagreement observed in the real world stands in contrast to the strong prediction that agents will eventually hold similar beliefs.

---

## Example

Take two states $A$ and $B$, with signal $a$, such that $P(a\mid A)=q,\ P(a\mid B)=1-q$. Imagine a agent has [[p-belief|q-belief]] $q=0.9$, so that state $A$ is very likely to produce $a$ signals. The sequence is *extremely unlikely* in their model:

The probability of observing $a$ in $t$ periods consecutively is

$$
\pi_{A}^{i}\cdot(0.9)^{t}+(1-\pi_{A}^{i})\cdot(0.1)^{t}\to 0\quad \text{as }t\to \infty
$$

The agent can't update their model, it is fixed. All they can do is use Bayes' rule to ask which of their allowed states $(A\mid B)$ makes this unbelievable sequence *more likely*.

Since $q^{t}>(1-q)^{t}$, the agent concludes that state $A$ is the *relatively* better explanation. As $t\to \infty$, the agent becomes **absolutely certain** that the state is $A$.

>[!insight]
>The agent becomes _more_ confident in state A _precisely as_ the evidence (the "all 'a's" sequence) grows _less_ likely under their entire model. They are forced to accept the "least unlikely" explanation, even if it's absurdly improbable. This is the consequence of dogmatism.

---

To fix this, we introduce the concept of [[Model Uncertainty and Misspecification under Bayesian Learning|model uncertainty]], where we allow the agent to be uncertain about *both* the state of the world and the signal generating process itself. Under this paradigm, we expand the state space from $\Theta$ (the payoff-relevant state) to $\Theta \times\Gamma$, where $\gamma \in \Gamma$ is the *model parameter*