---
up: "[[Information Theory]]"
aliases:
tags:
  - concept/fern
  - bayes/learning
  - micro/information
---

The Bayesian Persuasion Model is a strategic framework where a "Sender" commits to an information structure (a "signal") to influence the actions of a rational "Receiver."

## Outline
- **Example:** [[Prosecutor-Judge Game (Kamenica & Gentzkow (2011))]]
- [[Value of a Signal (Kamenica-Gentzkow)]]
	- [[Receiver's Optimal Action - Sender-Preferred Equilibrium]]
	- [[Sender's Indirect Utility Function]]
	- [[Cor (K-G). Value of Optimal Signal]]
- [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope]]
- [[When (Bayesian) Persuasion is valuable]]


## The Model

- **Agents:** two agents, a **sender** and a **receiver**
- **State:** the unknown state parameter $\theta$ in finite state space $\Theta$
- **Common prior:** both agents share $\mu_{0}\in\Delta(\Theta)$
- **Signal:** any mapping $\Theta\to\Delta(S)$ from the set of states into distributions over a finite set of signal realizations $S$.
- **Actions:** The *receiver* chooses from a **compact** set of actions $A$. 
- **Payoffs:**
	- $u_{R}:A \times\Theta\to \mathbb{R}$ – the Receiver's utility function
	- $u_{S}:A \times \Theta\to \mathbb{R}$ the Sender's utility function
	- Both assumed to be continuous. Depends on the receiver's action and the true state.
 
### Timeline of the Game
1.  **Sender** chooses the signal $\sigma$ (the "information structure").
	1. The sender cannot lie, but they can choose the "test" that generates the signal.
2.  **Receiver**
	1. Observes the signal realization $s \in S$
	2. [[Bayesian Updating of Beliefs|Updates their beliefs]] from the prior $\mu_0$ to a posterior belief $\mu_s$, 
	3. Chooses an action $a \in A$ to maximize their own expected utility.
3.  **Payoffs** $u_S(a, \theta)$ and $u_R(a, \theta)$ are realized

The core idea is **persuasion through strategic information revelation**. The Sender can't force the Receiver's action or falsify evidence. Instead, the Sender designs the _lens_ through which the Receiver will see the world. The Sender's problem is to find the signal $\sigma$ that maximizes their own expected payoff, $u_S$, knowing the Receiver will act in their own best interest.

## Solution Concepts

The game is solved using a [[Subgame Perfect Nash Equilibrium]] where the Sender moves first (choosing the signal structure), and the Receiver moves second (choosing an action after observing the signal realization). The equilibrium concept refines further to a "Sender-Preferred" equilibrium: when the Receiver is indifferent between multiple optimal actions, they break ties in favor of the action that maximizes the Sender's payoff. This tie-breaking rule defines the [[Receiver's Optimal Action - Sender-Preferred Equilibrium]], which maps posterior beliefs $\mu$ to actions $\hat{a}(\mu)$ that optimize the Receiver's expected utility while favoring the Sender in case of indifference.

Given the Receiver's optimal response function $\hat{a}(\mu)$, we can define the [[Sender's Indirect Utility Function]] $\hat{v}(\mu) := \mathbb{E}_{\mu}[u_{s}(\hat{a}(\mu), \theta)]$, which represents the Sender's expected payoff as a function of the Receiver's posterior belief $\mu$. This function is central to the analysis because it transforms the Sender's problem from choosing signals to understanding how different beliefs translate into payoffs. The Sender cannot directly choose the Receiver's belief, but by designing the signal structure $\sigma$, they can induce a distribution over posterior beliefs that the Receiver will form after observing different signal realizations.


## The Sender's Problem

The fundamental challenge in Bayesian Persuasion is that the space of possible signals is enormous—potentially infinite—making direct optimization intractable. The breakthrough result of [[Value of a Signal (Kamenica-Gentzkow)]] provides an elegant reformulation: instead of searching over all possible signal structures $\sigma: \Theta \to \Delta(S)$, we can equivalently search over all [[Bayes' Plausible]] distributions of posterior beliefs $\tau \in \Delta(\Delta(\Theta))$. This theorem establishes that any value achievable by some signal can also be achieved by a finite-valued signal, and more importantly, that we can characterize the optimal signal purely in terms of the distribution of posteriors it induces.

The [[Cor (K-G). Value of Optimal Signal]] formalizes this as an optimization problem: find $\max_{\tau \in \Delta(\Delta(\Theta))} \mathbb{E}_{\tau}[\hat{v}(\mu)]$ subject to the constraint $\int \mu \, d\tau(\mu) = \mu_0$. This reformulation is powerful because it reduces the Sender's problem to a constrained optimization over distributions. The objective is to maximize the expected value of the indirect utility function $\hat{v}(\mu)$ over all posterior beliefs $\mu$, weighted by how frequently each posterior occurs under the signal. The constraint ensures that the distribution is [[Bayes' Plausible]]—that is, consistent with some signal that respects Bayesian updating from the common prior $\mu_0$.


## Geometric Solution Method

The [[Bayesian Persuasion - Solution-concept as a Upper Concave Envelope]] provides a geometric characterization of the optimal value the Sender can achieve. 

The key idea is to construct the [[Upper Concave Envelope]] $V(\mu)$ of the indirect utility function $\hat{v}(\mu)$. Intuitively, $V(\mu)$ represents the highest expected payoff the Sender can achieve by "splitting" belief $\mu$ into a convex combination of other beliefs—precisely what a signal does by creating a distribution over posteriors.

The concave envelope $V(\mu)$ serves as an upper bound on what the Sender can achieve from any prior $\mu$, and this bound is always attainable: there always exists a signal that achieves payoff $V(\mu_0)$ at the prior. For Bayesian Persuasion, this means the optimal signal needs at most $|\Theta| + 1$ signal realizations, making the optimal signal computationally tractable despite the infinite space of possible signals.

The geometric interpretation reveals exactly [[When (Bayesian) Persuasion is valuable]]: persuasion benefits the Sender if and only if $V(\mu_0) > \hat{v}(\mu_0)$, which occurs when the indirect utility function is not already concave at the prior.

The Geometric solution-concept uses the concepts from the [[Blackwell Order]] and flips it: instead of asking which signal is best for _all_ receivers (Blackwell), the Sender finds the optimal splitting of the belief space (the concave envelope) to maximize utility for a *specific* Receiver. Further, the $V(\mu_{0})>\hat{v}(\mu_{0})$ condition means the sender benefits from "splitting" the prior $\mu_{0}$, which is structurally equivalent to [[Mean-Preserving Spread]]s on the prior belief. 


## Applications and Examples

The canonical example of Bayesian Persuasion is the [[Prosecutor-Judge Game (Kamenica & Gentzkow (2011))]], which illustrates the key mechanics through a simple two-state model. In this game, a prosecutor designs evidence revelation to influence a judge's conviction decision when defendants may be innocent or guilty. The example demonstrates how the prosecutor optimally pools innocent and guilty defendants to create a posterior belief that keeps the judge exactly at the threshold of conviction ($\mu = 0.5$), achieving double the payoff of perfect information revelation. This example is pedagogically valuable because it shows clearly how the step function structure of $\hat{v}(\mu)$ creates opportunities for persuasion, and how the optimal signal exploits this by strategically "splitting" the prior into posteriors that lie on the concave envelope.



