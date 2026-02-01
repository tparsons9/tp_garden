---
up: "[[Individual Learning implies Common Learning]]"
aliases:
tags:
  - proof
---
## Proof

Write $\{ \theta \}$ for the event $\{ \theta \}\times \mathcal{X}^{\infty}$. Define $F_{t}=\{ \theta \}\cap B_{t}^{\sqrt{ q }}(\theta)$ to be the set of states at which $\theta$ is true and both agents ${} \sqrt{ q }$-believe it. We'll verify that the conditions of [[Lemma. Common Learning Characterization via Evident q-Belief]] hold for the sequence of events $(F_{t})^{\infty}_{t=1}$ from which [[Individual Learning implies Common Learning#^ml-prp-conditional-independence-individual-common]] follows.

First observe that

$$
\begin{aligned}
F_{t} & \subseteq B_{t}^{\sqrt{ q }}(\theta)\qquad\text{by definition of }F_{t} \\
 & \subseteq B_{t}^{q}(\theta)\qquad \text{since } q<\sqrt{ q }
\end{aligned}
$$

yielding part $(1)$ of the Lemma. Part $(2)$ holds since [[Individual Learning]] implies that there exists $T<\infty$ such that for both agents $i=1,2$,

$$
P_{\theta}(B_{it}^{\sqrt{ q }}(\theta))> \sqrt{ q }\qquad \forall t>T
$$

and thus,

$$
P_{\theta}(F_{t}) = P_{\theta}\left( B_{1t}^{\sqrt{  q}} (\theta)\right)P_{\theta}\left( B_{2t}^{\sqrt{ q }}(\theta) \right) >q\qquad \forall t > T 
$$

from the assumption of [[Conditional independence]]. It remains to show part $(3)$.

First set $B_{1t}^{q}(F_{t})$ as follows:
$$
\begin{aligned}
B_{1t}^{q}(F_{t}) & = \{ \omega\mid  \mathbb{E}[\mathbb{1}_{F_{t}}\mid  \mathcal{H}_{1t}]\geq q \} &  \text{by definition of }B_{1t}^{q} \\
 & = \left\{\omega\mid  \mathbb{E}\left[ \mathbb{1}_{B_{1t}^{\sqrt{ q }}(\theta)}\mathbb{1}_{B_{2t}^{\sqrt{ 2 }}(\theta)\cap \{ \theta \}}\mid  \mathcal{H_{1t}} \right] \geq q  \right\} &  \text{by definition of }F_{t} \\
 & =  \left\{\omega\mid  \mathbb{1}_{B_{1t}^{\sqrt{ q }}(\theta)}\mathbb{E}\left[ \mathbb{1}_{B_{2t}^{\sqrt{ q }}(\theta)\cap \{ \theta \}}\mid  \mathcal{H}_{1t} \right] \geq q\right\} & \text{since }B_{1t}\sqrt{ q }(\theta)\in \mathcal{H}_{1t} \\
 & = B_{1t}^{\sqrt{ q }}(\theta)\cap B_{1t}^{q}\left( B_{2t}^{\sqrt{ q } }(\theta)\cap \{ \theta \} \right) &  
\end{aligned}
$$
By definition we have that $F_{t}\subseteq B_{1t}^{\sqrt{ q }}(\theta)$. As above, individual learning implies the existence of $T$ sufficiently large such that $P_{\theta}(B_{2t}^{\sqrt{ q }}(\theta))>\sqrt{ q }$ for all $t>T$. Since signals are conditionally independent, agent 1's history is uninformative about agent 2's history, implying that 
$$
P_{\theta}(B_{2t}^{\sqrt{ q }}(\theta)\mid  \mathcal{H}_{1t})\geq \sqrt{ q }
$$
holds uniformly across agent 1 histories for all $t>T$. So on $F_{t}$ with $t>T$, we have 
$$
P\left( B_{2t}^{\sqrt{ q }}(\theta)\cap \{ \theta \}\mid  \mathcal{H}_{1t} \right) = \underbrace{ P_{\theta}(B_{2t}^{\sqrt{ q }}(\theta)\mid  \mathcal{H}_{1t}) }_{ > \sqrt{ q } }\cdot \underbrace{ P(\theta\mid  \mathcal{H}_{1t}) }_{ >\sqrt{ q } \text{ by }F_{t}\subseteq B_{1t}^{\sqrt{  q}}(\theta) } > q
$$
Applying [[Lemma. Common Learning Characterization via Evident q-Belief]] and we are done. 
