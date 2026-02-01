---
up: "[[Information Theory]]"
aliases:
tags:
  - concept/example
---
Payoffs are assumed to be [[Common Knowledge]] in any complete information game. Ariel Rubenstein's email game shows that for one formalism of what *"almost common knowledge"* means, strategic predictions under the assumption of common knowledge do not hold when we relax the assumption. 

>[!note] Two Approaches to "Almost Common Knowledge"
>The literature offers two main ways to relax the common knowledge assumption:
>1. **Email Game (Rubinstein)**: Finite but arbitrarily high orders of knowledge
>2. [[Common p-Belief]]: Common knowledge of probabilistic beliefs ($p < 1$)
>
>These approaches have fundamentally different properties and implications for strategic behavior.

## The Email Game

### Setup

- Two agents choose an action: $e \in \{ A,B \}$
- Two possible payoff matrices $\{ a,b \}$
- Agents share a common prior that assigns probability $1-p> \frac{1}{2}$ to matrix indexed $a$. 

##### Events
- $A$: payoff state is $a$ with prior $P(A)=1-p$
- $B$: payoff state is $b$ with prior $P(B)=p$
- $E_{it}$: agent $i$ at step $t$ doesn't receive an email $(T_{i}=0)$. 
- $H_{1}$: We're in $(b,t,t-1)$ – the $t^{th}$ email from $1\to 2$ was **lost** 
- $H_{2}$: we're in $(b,t,t)$ – the $t^{th}$ email **arrived** but the **confirmation** back was lost

##### Likelihoods

- If $A$ holds, Agent 1 never sends an email, so Player 2 surely gets none: $P(E_{(\cdot)}\mid A)=1$
- If $B$ holds, Agent 1's email is sent but can be lost with probability $\varepsilon$: $P(E_{2,1}\mid B)=\varepsilon$
- $P(H_{1})=\varepsilon$
- $P(H_{2})=(1-\varepsilon)$

##### Posteriors

$$
\begin{aligned}
P(A\mid E) & = \frac{(1)(1-p)}{(1)(1-p)+ (\varepsilon)(p)} & = \frac{1-p}{1-p+p\varepsilon} \\
P(B\mid E) & = \frac{p\varepsilon}{1-p+p\varepsilon}
\end{aligned}
$$

#### Payoff Matrix

$$
\overbrace{ \begin{matrix}
 & A & B  \\
A & M,M & 0,-L \\
B & -L,0 & 0,0 
\end{matrix} }^{ a } \qquad \overbrace{ \begin{matrix}
 & A & B \\
A & 0,0 & 0,-L \\
B & -L,0 & M,M 
\end{matrix} }^{ b }
$$

### Communication Protocol

#### Initial Setup and Constraints
Both players have an automated email server, which is the only means by which the players can communicate. Agent $1$ is informed of the payoff parameter.

#### Triggering Condition
If (and only if) the parameter is $b$, agent $1$'s email server automatically sends an email to agent $2$ announcing that the parameter is $b$.

#### Technical Infrastructure
- All emails are independently lost with probability $\varepsilon > 0$
- The agents' email servers are set up to automatically send back confirmations that emails have been received
- Confirmations of confirmations, etc. (recursive confirmation system)

#### Type Definition
Each agent $i$'s **type** $T_i$ is the number of emails that agent $i$'s computer sends, which is privately known to agent $i$.

#### Information Structure Implications
In the special case $T_1 = T_2 = \infty$, there is common knowledge that the parameter is $b$.

But if for example $T_1 = 2$, then:
- Agent $1$ knows the parameter is $b$
- Agent $1$ knows that agent $2$ knows that the parameter is $b$
- But agent $1$ does not know that agent $2$ knows that agent $1$ knows that agent $2$ knows that the parameter is $b$

In general, so long as $T_1$ and $T_2$ are finite, then higher-order knowledge of parameter $b$ must break down at some stage.

>[!note] Formal Model
>In the partitional framework of Section 1.1, we would model this information environment as follows: The state space is
>$$\Omega = \{(a, 0, 0),(b, 1, 0),(b, 1, 1),(b, 2, 1),(b, 2, 2), \ldots \}$$
>and agents' information partitions are given by
>$$\Pi_1 = \{\{(a, 0, 0)\}, \{(b, 1, 0),(b, 1, 1)\}, \{(b, 2, 1),(b, 2, 2)\}, \ldots \}$$
>$$\Pi_2 = \{\{(a, 0, 0),(b, 1, 0)\}, \{(b, 1, 1),(b, 2, 1)\}, \ldots \}$$
>where, for example, $T_1 = 0$ reveals to player $1$ the partition element $\{(a, 0, 0)\}$, while $T_2 = 0$ reveals to player $2$ the partition element $\{(a, 0, 0),(b, 1, 0)\}$. 

> [!question]- The Role of $\varepsilon$? 
> If emails were **never lost** $(\varepsilon=0)$, the state "it's $b$" would become **common knowledge**, and both players would rationally coordinate on $B$. 
> 
> But if $\varepsilon>0$, no matter how many confirmations happen, the chain ends _somewhere_. That means that common knowledge breaks at some finite order. The only equilibrium is both players always choosing **A** (the safe action). 
> 
> The "almost" common knowledge isn't enough for coordination here–there's a discontinuity between $\varepsilon=0$ and $\varepsilon>0$


>[!important] Key Insight
>The email game demonstrates that **discrete** approximations to common knowledge can behave very differently from common knowledge itself, exhibiting discontinuities and strategic fragility.
>
>In contrast, [[Common p-Belief]] provides a **continuous** relaxation that may be more robust for many applications, though it comes with its own theoretical trade-offs.

## Email Game with a twist 

The unknown parameter is $\theta \in \{ \theta^{\prime},\theta^{\prime\prime} \}$ where $0\leq\theta^{\prime}<\theta^{\prime\prime}\leq 1$. Suppose that every period a signal profile is independently drawn according to: 

$$
\begin{matrix}
\text{Probability} & \text{Agent-1 Signal} & \text{Agent-2 Signal} \\
\theta & 0 & 0 \\
\varepsilon(1-\theta) & 1 & 0 \\
(1-\varepsilon)\varepsilon(1-\theta) & 1 & 1 \\
(1-\varepsilon)^{2}\varepsilon(1-\theta) & 2 & 1 \\
(1-\varepsilon)^{3}\varepsilon(1-\theta) & 2 & 2 \\
(1-\varepsilon)^{4}\varepsilon(1-\theta) & 3 & 2 \\
(1-\varepsilon)^{5}\varepsilon(1-\theta) & 3 & 3 \\
\vdots & \vdots & \vdots 
\end{matrix}
$$
Agents observe repeated independent realizations of the signal. When $\theta$ is restricted to values $0$ and $1$, the agent _commonly learns_ the parameter. But common learning fails whenever $0<\theta^{\prime}<\theta^{\prime\prime}<1$, as agents cannot commonly learn $\theta^{\prime\prime}$: the parameter placing more weight on the lower signal realizations. See [[Individual Learning implies Common Learning#Intermediate Correlation breaks Proposition 1.]] for a full discussion. 
