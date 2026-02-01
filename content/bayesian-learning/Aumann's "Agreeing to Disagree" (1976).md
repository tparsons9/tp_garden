---
up: "[[Information Partitions and Knowledge]]"
aliases:
  - Agreeing to Disagree
tags:
  - concept/theorem
  - micro/information
---
> [!theorem] Theorem (Aumann's Agreement Theorem (1976)).
> Suppose that $\mathcal{I}=\{ 1,2 \}$. Fix any state $\omega \in\Omega$ and event $A\subseteq\Omega$. If it is common knowledge at $\omega$ that agent $1$ assigns posterior probability $q_{1}$ to event $A$, while agent $2$ assigns posterior probability $q_{2}$ to the same event, then $q_{1}=q_{2}$. 
> $$
>\text{Common knowledge of posteriors} \implies q_1 = q_2
>$$

That is, agents with a common prior cannot "agree to disagree" once their posterior beliefs are common knowledge. 

>[!insight] Why This Makes Sense
>- Each agent might update differently after seeing private information
>- But once posteriors themselves are common knowledge, both agents effectively condition on the same [[Meet Operator|meet cell]], $\Pi_1 \wedge \Pi_2$
>- Within that meet cell, consistency of Bayes' rule forces $q_1$ and $q_2$ to match
>
>**The key insight**: Common knowledge of posteriors pins agents down to the same information cell, forcing belief convergence.

## Common Misconceptions
>[!warning] Rationality vs. Agreement
>The theorem doesn't say rational agents always agree - it says they can't "agree to disagree" once posteriors are common knowledge.

>[!warning] Private vs. Public Information
>Agents can have different beliefs based on private information, but not once those beliefs become commonly known.
