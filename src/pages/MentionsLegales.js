import React from 'react';

function MentionsLegales() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Mentions Légales</h1>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Responsable des contenus du site</h2>
                <p>John Wesley, 95 rue de l'Ouest, Paris 14ème, 06 67 90 41 16</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Président</h2>
                <p>Simon</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Webmaster(s)</h2>
                <p>Julius Constantin DJOSSOU</p>
            </div>

            <div className="mb-8">
                <p>Ce site et son contenu sont protégés par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction, imitation et/ou exploitation partielle ou totale, sans l'autorisation expresse et écrite d’un responsable de l'association, est strictement prohibée.</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Editeur du site</h2>
                <p>EPMF - John Wesley, 95 Rue de l'Ouest, Paris, France</p>
                <p>Tél: 06 67 90 41 16</p>
                <p>Activités des organisations religieuses (9491Z)</p>
                <p>Responsable du service communication : Antoinette Akpro</p>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Conception & Développement</h2>
                <p>keTaverse, Rue Raffin, 93220 Gagny</p>
                <a href="https://keTaverse.dj.com" className="text-blue-500">www.keTaverse.dj.com</a>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Hébergeur</h2>
                <p>OVH</p>
                <p>Adresse OVH à insérer ici</p>
                <a href="#" className="text-blue-500">www.ovh.com</a>
            </div>

            <div className="mb-8">
                <h2 className="text-xl font-bold mt-4">Confidentialité et collecte de données personnelles</h2>
                <p>
                    Le site s’engage à ce que la collecte et le traitement de vos données, effectués à partir de ce site, soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <h2 className="text-xl font-bold mt-4">Cookies</h2>
                <p>
                    Vous pouvez à tout moment configurer vos préférences en matière de cookies.
                </p>
                <p>
                    Ce site utilise différents types de cookies pour son bon fonctionnement et pour l’analyse statistique des visites sur le site.
                </p>
                <h2 className="text-xl font-bold mt-4">Traitement des données personnelles</h2>
                <p>
                    Chaque formulaire limite la collecte des données personnelles au strict nécessaire et indique quels sont les objectifs du recueil de ces données.
                </p>
                <p>
                    Les données transmises par les formulaires de contacts, de demande de projet ou de candidature sont stockées sur le site à des fins d’historique et transmises par mail aux personnes en charge. Elles sont ensuite utilisées pour répondre à vos demandes.
                </p>
                <p>
                    Les adresses emails transmises via le formulaire d’inscription aux newsletters sont utilisées pour vous envoyer les newsletters demandées. Ces adresses emails sont conservées tant que la personne concernée ne se désinscrit pas via le lien de désinscription intégré aux newsletters.
                </p>
                <h2 className="text-xl font-bold mt-4">Vos droits</h2>
                <p>
                    Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès et de rectification de vos données personnelles ainsi que de celui d’en demander l’effacement, le droit de vous opposer à leur traitement et d’en obtenir la limitation ou la portabilité dans la mesure où cela est applicable.
                </p>
                <h2 className="text-xl font-bold mt-4">Comment bloquer les cookies</h2>
                <p>
                    Par défaut, votre navigateur acceptera les cookies, mais cela peut être modifié et la plupart des navigateurs vous permettront de refuser les cookies. Pour en savoir plus
                </p>
                <ul className="list-disc ml-8">
                    <li>Chrome</li>
                    <li>Firefox</li>
                    <li>Edge</li>
                    <li>Internet Explorer</li>
                </ul>
                <p>
                    Si vous souhaitez bloquer tous les cookies tout le temps, vous pouvez définir ainsi les préférences de votre ordinateur.
                </p>
                <h2 className="text-xl font-bold mt-4">Contact</h2>
                <p>
                    Si vous avez des questions concernant notre politique de cookies ou le traitement de vos données, veuillez nous envoyer un message via la page de contact ou un courrier à l’adresse suivante : EPMF - John Wesley, 95 Rue de l'Ouest, Paris, France.
                </p>
            </div>



        </div>
    );
}

export default MentionsLegales;
