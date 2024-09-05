import { Discipline } from "../entities/discipline.js";
import { Workload } from "../entities/workload.js";
export class DisciplineFactory {
    static make() {
        const aep = new Discipline(3389, "ALGORITMOS E PROGRAMAÇÃO", new Workload(32, 32), 1, null, true);
        const aoc = new Discipline(3390, "ARQUITETURA E ORGANIZAÇÃO DE COMPUTADORES", new Workload(64, 0), 1, null, true);
        const fsi = new Discipline(3389, "FUNDAMENTOS PARA SISTEMAS DE INFORMAÇÃO", new Workload(48, 0), 1, null, true);
        const tdm = new Discipline(862, "TÓPICOS DE MATEMÁTICA", new Workload(64, 0), 1, null, true);
        const dbOne = new Discipline(3014, "BANCO DE DADOS I", new Workload(32, 32), 2, fsi, true);
        const edd = new Discipline(1802, "ESTRUTURAS DE DADOS", new Workload(32, 32), 2, aep, true);
        const fes = new Discipline(3391, "FUNDAMENTOS DE ENGENHARIA DE SOFTWARE", new Workload(48, 0), 2, fsi, true);
        const dbTwo = new Discipline(3020, "BANCO DE DADOS II", new Workload(32, 32), 3, dbOne, true);
        const poo = new Discipline(3023, "PROGRAMAÇÃO ORIENTADA A OBJETOS", new Workload(32, 32), 3, edd, true);
        const extOne = new Discipline(3026, "PROJETO INTEGRADOR DE EXTENSÃO I", new Workload(0, 0), 3, null, true);
        const pdb = new Discipline(3394, "PROGRAMAÇÃO COM BANCO DE DADOS", new Workload(32, 32), 4, null, true);
        const extTwo = new Discipline(3032, "PROJETO INTEGRADOR DE EXTENSÃO II", new Workload(0, 0), 4, extOne, true);
        const sop = new Discipline(1813, "SISTEMAS OPERACIONAIS", new Workload(32, 32), 4, aoc, true);
        const aps = new Discipline(3025, "ANÁLISE E PROJETO DE SOFTWARE", new Workload(32, 32), 5, fes, true);
        const pwOne = new Discipline(3029, "PROGRAMAÇÃO WEB I", new Workload(32, 32), 5, poo, true);
        const extTree = new Discipline(3037, "PROJETO INTEGRADOR DE EXTENSÃO III", new Workload(0, 0), 5, extTwo, true);
        const cdd = new Discipline(3398, "CIÊNCIA DE DADOS", new Workload(32, 32), 6, pdb, true);
        const gti = new Discipline(3397, "GOVERNANÇA DE TECNOLOGIA DA INFORMAÇÃO", new Workload(64, 0), 6, fes, true);
        const extFour = new Discipline(3043, "PROJETO INTEGRADOR DE EXTENSÃO IV", new Workload(0, 0), 6, extTree, true);
        const qds = new Discipline(3042, "QUALIDADE DE SOFTWARE", new Workload(64, 0), 6, aps, true);
        const rdc = new Discipline(3028, "REDES DE COMPUTADORES", new Workload(32, 32), 6, sop, true);
        const gps = new Discipline(3030, "GESTÃO DE PROJETOS DE SOFTWARE", new Workload(32, 32), 7, aps, true);
        return [
            new Discipline(3210, "LÍNGUA INGLESA", new Workload(32, 32), 1, null, true),
            new Discipline(3392, "ELABORAÇÃO E ANÁLISE DE PROJETOS ECONÔMICOS", new Workload(64, 0), 2, null, true),
            new Discipline(1801, "TECNOLOGIA E SOCIEDADE", new Workload(48, 0), 2, null, true),
            new Discipline(3278, "LÍNGUA PORTUGUESA", new Workload(32, 32), 3, null, true),
            new Discipline(3393, "SISTEMAS DE INFORMAÇÕES CONTÁBEIS", new Workload(64, 0), 3, null, true),
            new Discipline(3386, "EMPREENDEDORISMO E REDE DE COOPERAÇÃO", new Workload(64, 0), 4, null, true),
            new Discipline(173, "ESTATÍSTICA APLICADA", new Workload(64, 0), 4, tdm, true),
            new Discipline(3395, "LEGISLAÇÃO EM INFORMÁTICA", new Workload(64, 0), 5, null, true),
            new Discipline(3396, "METODOLOGIA CIENTÍFICA", new Workload(32, 32), 5, null, true),
            new Discipline(3399, "GESTÃO DA PEQUENA E MÉDIA EMPRESA", new Workload(64, 0), 6, null, true),
            new Discipline(3400, "ANÁLISE DE REDES SOCIAIS", new Workload(32, 32), 7, cdd, true),
            new Discipline(1823, "INTERAÇÃO HUMANO-COMPUTADOR", new Workload(32, 32), 7, pwOne, true),
            new Discipline(3401, "PROJETO INTEGRADOR DE EXTENSÃO V", new Workload(0, 0), 7, extFour, true),
            new Discipline(1764, "SISTEMAS DISTRIBUÍDOS", new Workload(32, 32), 7, rdc, true),
            new Discipline(1763, "AUDITORIA E SEGURANÇA EM SISTEMAS DE INFORMAÇÃO", new Workload(64, 0), 8, rdc, true),
            new Discipline(3403, "ESTÁGIO CURRICULAR OBRIGATÓRIO", new Workload(0, 0), 8, null, true),
            new Discipline(3402, "PLANEJAMENTO E ESTRATÉGIA EMPRESARIAL", new Workload(64, 0), 8, null, true),
            new Discipline(1826, "SISTEMAS DE APOIO À DECISÃO", new Workload(32, 32), 8, cdd, true),
            new Discipline(3405, "ARQUITETURA DE SOFTWARE", new Workload(32, 32), 0, fes, false),
            new Discipline(1774, "BANCO DE DADOS NÂO-CONVENCIONAIS", new Workload(32, 32), 0, dbTwo, false),
            new Discipline(1835, "CONCEITOS DE LINGUAGENS DE PROGRAMAÇÃO", new Workload(64, 0), 0, edd, false),
            new Discipline(3408, "DESENVOLVIMENTO DE SOFTWARE PARA DISPOSITIVOS MÓVEIS", new Workload(32, 32), 0, pwOne, false),
            new Discipline(3272, "EDUCAÇÃO AMBIENTAL", new Workload(32, 32), 0, null, false),
            new Discipline(3050, "EDUCAÇÃO DAS RELAÇÕES ÉTNICO-RACIAIS", new Workload(64, 0), 0, null, false),
            new Discipline(3049, "EDUCAÇÃO EM DIREITOS HUMANOS", new Workload(64, 0), 0, null, false),
            new Discipline(3406, "ENGENHARIA DE REQUISITOS", new Workload(32, 32), 0, fes, false),
            new Discipline(3012, "FUNDAMENTOS DE ADMINISTRAÇÃO GERAL", new Workload(64, 0), 0, null, false),
            new Discipline(3404, "FUNDAMENTOS DE ENGENHARIA DE SISTEMAS", new Workload(48, 0), 0, null, false),
            new Discipline(3410, "GERÊNCIA DE CONFIGURAÇÃO DE SOFTWARE", new Workload(64, 0), 0, gps, false),
            new Discipline(3044, "GESTÃO DE PESSOAS", new Workload(64, 0), 0, null, false),
            new Discipline(2445, "GESTÃO DO AGRONEGÓCIO", new Workload(64, 0), 0, null, false),
            new Discipline(1878, "HISTÓRIA DA COMPUTAÇÃO", new Workload(64, 0), 0, null, false),
            new Discipline(1855, "INFORMÁTICA NA EDUCAÇÃO", new Workload(64, 0), 0, null, false),
            new Discipline(3409, "INTEGRAÇÃO DE APLICAÇÕES", new Workload(32, 32), 0, aps, false),
            new Discipline(1830, "INTRODUÇÃO À PROGRAMAÇÃO DE MICROCONTROLADORES", new Workload(32, 32), 0, null, false),
            new Discipline(1806, "LABORATÓRIO DE PROGRAMAÇÃO", new Workload(32, 32), 0, aep, false),
            new Discipline(2479, "LÍNGUA BRASILEIRA DE SINAIS - LIBRAS", new Workload(32, 32), 0, null, false),
            new Discipline(3015, "LINGUAGEM DE PROGRAMAÇÃO", new Workload(32, 32), 0, aep, false),
            new Discipline(1794, "LÓGICA MATEMÁTICA PARA SISTEMAS DE INFORMAÇÃO", new Workload(64, 0), 0, null, false),
            new Discipline(3410, "MERCADO DE SOFWARE", new Workload(64, 0), 0, qds, false),
            new Discipline(1869, "PROGRAMAÇÃO EM AMBIENTE WEB II", new Workload(32, 32), 0, pwOne, false),
            new Discipline(1809, "TEORIA E ESTUDOS ORGANIZACIONAIS", new Workload(64, 0), 0, null, false),
            new Discipline(1772, "TÓPICOS ESPECIAIS EM BANCO DE DADOS", new Workload(32, 32), 0, dbTwo, false),
            new Discipline(3412, "TÓPICOS ESPECIAIS EM COMPUTAÇÃO I", new Workload(64, 0), 0, null, false),
            new Discipline(3413, "TÓPICOS ESPECIAIS EM COMPUTAÇÃO II", new Workload(64, 0), 0, null, false),
            new Discipline(3414, "TÓPICOS ESPECIAIS EM COMPUTAÇÃO III", new Workload(64, 0), 0, null, false),
            new Discipline(3415, "TÓPICOS ESPECIAIS EM COMPUTAÇÃO IV", new Workload(64, 0), 0, null, false),
            new Discipline(1857, "TÓPICOS ESPECIAIS EM ENGENHARIA DE SOFTWARE", new Workload(64, 0), 0, fes, false),
            new Discipline(3407, "VERIFICAÇÃO E VALIDAÇÃO DE SOFWARE", new Workload(32, 32), 0, aps, false),
        ];
    }
}
